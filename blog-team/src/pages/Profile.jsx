import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <Container className="mt-5 text-center">
            <h2>Ласкаво просимо до профілю!</h2>
            <Button onClick={handleLogout}>Вийти</Button>
        </Container>
    );
};

export default Profile;
