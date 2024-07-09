import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import NoItem from "../components/NoItem";
import LoadingSpinner from "../components/LoadingSpinner";
import CreatedAt from "../components/CreatedAt";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import propTypes from 'prop-types';
import SearchBar from "./SearchBar";
import Toast from "./Toast";
import useToast from "../hooks/toast";

const BlogList = ({ isAdmin }) => {
    const [toasts, addToast, deleteToast] = useToast([]);

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchText, setSearchText] = useState('');
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pageParam = params.get('page');

    const onClickPageButton = (page) => {
        navigate(`${location.pathname}?page=${page}`)
        setCurrentPage(parseInt(page) || 1);
        getPosts(page);
    }

    const getPosts = useCallback((page = 1) => {
        console.log("page = ", page);
        setCurrentPage(parseInt(page) || 1);
        console.log("searchText = ", searchText);
        let params = {
            _page: page,
            _per_page: 5,
            _sort: 'id',
            _order: 'desc',
            title: searchText,
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
    }, [isAdmin, searchText]);

    useEffect(() => {
        setCurrentPage(parseInt(pageParam) || 1);
        getPosts(parseInt(pageParam) || 1);
    }, []);

    useEffect(() => {
        setTotalPages(totalPages);
    }, [totalPages]);

    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3030/posts/${id}`).then(() => {
            setPosts(prevPost => prevPost.filter(post => post.id !== id));
            addToast({
                text: '삭제되었습니다.',
                type: 'success'
            })
        })
    }

    if (loading) {
        return <LoadingSpinner />;
    };

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

    const onSearch = () => {
        setCurrentPage(1);
        getPosts(1);
    }

    return (
        <div>
            <SearchBar
                value={searchText}
                onChange={setSearchText}
                onKeyUp={onSearch}
            />
            <hr />
            {posts.length === 0
                ? <NoItem />
                : <>
                    {viewBlogList()}
                    <Pagination
                        currentPage={currentPage}
                        numberOfPages={totalPages}
                        onClick={onClickPageButton}
                    />
                </>
            }
            <Toast
                toasts={toasts}
                deleteToast={deleteToast} />
        </div>

    )
}

BlogList.prototype = {
    isAdmin: propTypes.bool
}

export default BlogList;