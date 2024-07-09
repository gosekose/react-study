import { useState } from 'react';
import axois from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = () => {
        console.log(title, body);
        axois.post('http://localhost:3030/posts', {
            title: title,
            body: body
        }).then(() => {
            navigate('/blogs');
        })
    }

    return (
        <div>
            <h1>Create Blog Post</h1>
            <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                    className="form-control"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                        console.log(event.target.value)
                    }}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Body</label>
                <textarea
                    className="form-control"
                    value={body}
                    onChange={(event) => {
                        setBody(event.target.value)
                        console.log(event.target.value)
                    }}
                    rows='20'
                />
            </div>
            <button
                className='btn btn-primary'
                onClick={onSubmit}
            >
                Post
            </button>
        </div>
    )
}

export default BlogForm;