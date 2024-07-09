import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import NoItem from "../components/NoItem";
import LoadingSpinner from "../components/LoadingSpinner";

const ListPage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = () => {
        axios.get('http://localhost:3030/posts').then((res) => {
            setPosts(res.data);
            setLoading(false);
        })
    }

    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3030/posts/${id}`).then(() => {
            setPosts(prevPost => prevPost.filter(post => post.id !== id));
        })
    }

    const renderBlogList = () => {
        if (loading) {
            return <LoadingSpinner />;
        };

        if (posts.length === 0) {
            return <NoItem message="No Blog Posts" />;
        }

        return (
            posts.map(post => {
                return (
                    <Card
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        onClick={() => navigate('/blogs/edit')}
                    >
                        <div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={(e) => deleteBlog(e, post.id)}
                            >삭제</button>
                        </div>
                    </Card>
                )
            })
        )
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Blogs</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-success">Create New</Link>
                </div>
            </div>
            {renderBlogList()}            
        </div>
    );
}

export default ListPage