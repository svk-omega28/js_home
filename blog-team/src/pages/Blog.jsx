import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Form, ListGroup } from "react-bootstrap";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = searchParams.get("limit") || 0;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then((res) => res.json())
            .then(setPosts);
    }, [limit]);

    const handleLimitChange = (e) => {
        setSearchParams({ limit: e.target.value });
    };

    return (
        <Container className="mt-5">
            <h2>Список постів</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Кількість постів:</Form.Label>
                    <Form.Control type="number" value={limit} onChange={handleLimitChange} />
                </Form.Group>
            </Form>
            <ListGroup className="mt-3">
                {posts.map((post) => (
                    <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
                ))}
            </ListGroup>

        </Container>
    );
};

export default Blog;
