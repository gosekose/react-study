import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const ShowPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPost = (id) => {
        axios.get(`http://localhost:3030/posts/${id}`).then((res) => {
            setPost(res.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPost(id)
    }, [id]) // 의존성 배열 id가 변경이 되면 실행

    if (loading) {
        return <LoadingSpinner/>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default ShowPage;