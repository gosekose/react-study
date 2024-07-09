import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import NoItem from "../components/NoItem";
import LoadingSpinner from "../components/LoadingSpinner";
import CreatedAt from "../components/CreatedAt";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";


const BlogList = ({ isAdmin }) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pageParam = params.get('page');

    const onClickPageButton = (page) => {
        navigate(`${location.pathname}?page=${page}`)
    }

    const getPosts = useCallback((page = 1) => {
        console.log("page = ", page);
        setCurrentPage(parseInt(page) || 1);
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
    }, [isAdmin]);

    useEffect(() => {
        setCurrentPage(parseInt(pageParam) || 1);
        getPosts(parseInt(pageParam) || 1);
    }, [pageParam, getPosts]);

    useEffect(() => {
        setTotalPages(totalPages);
    }, [totalPages]);

    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3030/posts/${id}`).then(() => {
            setPosts(prevPost => prevPost.filter(post => post.id !== id));
        })
    }

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
                onClick={onClickPageButton}
            />
        </div>

    )
}

export default BlogList;