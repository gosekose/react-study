import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import NoItem from "../components/NoItem";
import LoadingSpinner from "../components/LoadingSpinner";
import CreatedAt from "../components/CreatedAt";
import Pagination from "./Pagination";


const BlogList = ({ isAdmin }) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getPosts = (page = 1) => {
        setCurrentPage(page);
        console.log("page = ", page);
        let params = {
            _page: page,
            _per_page: 5,
            _sort: 'id',
            _order: 'desc',
        }

        if (isAdmin) {
            params = { ...params, publish: true }
        } else {
            params = { ...params, publish: false }
        }

        axios.get(`http://localhost:3030/posts?`, {
            params: params
        }).then((res) => {
            console.log(res.data);
            setPosts(res.data.data);
            setTotalPages(res.data.pages);     
            setLoading(false);
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

    if (loading) {
        return <LoadingSpinner />;
    };

    if (posts.length === 0) {
        return <NoItem message="No Blog Posts" />;
    }

    const viewBlogList = () => {
        return (
            posts.map(post => {
                return (
                    <Card
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        createdAt={CreatedAt(post.createdAt)}
                        onClick={() => navigate(`/blogs/${post.id}`)}
                    >
                        {isAdmin ? (
                            <div>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={(e) => deleteBlog(e, post.id)}
                                >삭제</button>
                            </div>
                        ) : null
                        }
                    </Card>
                )
            })
        );
    }

    return (
        <div>
            {viewBlogList()}
            <Pagination
                currentPage={currentPage}
                numberOfPages={totalPages}
                onClick={getPosts}
            />
        </div>

    )
}

export default BlogList;