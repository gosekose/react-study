import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import NoItem from "../components/NoItem";

const ListPage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('http://localhost:3030/posts').then((res) => {
            setPosts(res.data);
        })
    }

    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3030/posts/${id}`).then(() => {
            setPosts(prevPost => prevPost.filter(post => post.id !== id));
        })
    }

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
            <div className="mt-3">
                {posts.length > 0 ? posts.map(post => {
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
                }
                ) : <NoItem message="No Blog Posts"/>}
            </div>
        </div>
    );
}

export default ListPage