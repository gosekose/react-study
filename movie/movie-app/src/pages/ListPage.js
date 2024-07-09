import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const ListPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('http://localhost:3030/posts').then((res) => {
            setPosts(res.data);
        })
    }

    useEffect(() => {
        getPosts();
        console.log(posts)
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
                {posts.map(post => {
                    return (
                        <Card key={post.id} title={post.title} body={post.body}>
                            <button className="btn btn-info">이동</button>
                        </Card>
                    )
                }
                )}
            </div>
        </div>
    );
}

Card.prototypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
}

export default ListPage