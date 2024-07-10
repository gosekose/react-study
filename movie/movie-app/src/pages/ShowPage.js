import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import CreatedAt from "../components/CreatedAt";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useToast from "../hooks/toast";

const ShowPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(0);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [error, setError] = useState('');
    const { addToast } = useToast();

    const getPost = (id) => {
        axios.get(`http://localhost:3030/posts/${id}`).then((res) => {
            setPost(res.data);
            setLoading(false);
        }).catch((e) => {
            console.log("eeeee = ", e)
            setLoading(false);
            addToast({
                type: 'danger',
                text: 'Not Found'
            });
            setError("Not Found!");
        }) 
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        getPost(id)
    }, [id]) // 의존성 배열 id가 변경이 되면 실행

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <div>{error}</div>   
    }


    return (
        <div>
            <div className="d-flex">
                <h1 className="flex-grow-1">{post.title}</h1>
                <div>
                    {isLoggedIn && <Link
                        className="btn btn-primary"
                        to={`/blogs/${id}/edit`}
                    > Edit </Link>}
                </div>
            </div>
            <small className="text-muted">{CreatedAt(post.createdAt)}</small>
            <hr />
            <p>{post.body}</p>
        </div>
    )
}

export default ShowPage;