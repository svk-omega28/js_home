import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then(setPost);
    }, [postId]);
    console.log(post.body)
    if (!post) return <p>Завантаження...</p>;

    return (
        <Container className="mt-5">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </Container>
    );
};

export default PostDetail;
