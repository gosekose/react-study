import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import PropTypes from 'prop-types';


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
            <h1>Blogs</h1>
            {posts.map(post => {
                return (
                    <Card key={post.id} title={post.title} body={post.body}>
                        <button>이동</button>
                    </Card>
                )
            }
            )}
        </div>
    );
}

Card.prototypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
}

export default ListPage