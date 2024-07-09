import { useEffect, useState } from 'react';
import axois from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { bool } from 'prop-types';
import FormCheckSwitch from './FormCheckSwitch';

const BlogForm = ({ editing }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [publish, setPublish] = useState(true);

    const [originalTitle, setOriginalTitle] = useState('');
    const [originalBody, setOriginalBody] = useState('');
    const [originalPublish, setOriginalPublish] = useState('');

    const { id } = useParams();

    const onSubmit = () => {
        if (editing) {
            console.log(title, body);
            axois.put(`http://localhost:3030/posts/${id}`, {
                title: title,
                body: body,
                publish: publish,
                createdAt: Date.now()
            }).then(() => {
                navigate(`/blogs/${id}`);
            })
        } else {
            console.log(title, body);
            axois.post('http://localhost:3030/posts', {
                title: title,
                body: body,
                publish: publish,
                createdAt: Date.now()
            }).then(() => {
                navigate('/admin');
            })
        }
    };

    const isEdited = () => {
        return title !== originalTitle || body !== originalBody || publish !== originalPublish;
    };

    const goBack = () => {
        if (editing) {
            navigate(`/blogs/${id}`)
        } else {
            navigate('/blogs')
        }
    };

    const onChangePublish = (e) => {
        console.log(e.target.checked);
        setPublish(e.target.checked)
    }

    useEffect(() => {
        if (editing) {
            axois.get(`http://localhost:3030/posts/${id}`).then(res => {
                setTitle(res.data.title);
                setBody(res.data.body);
                setPublish(res.data.publish);
                setOriginalTitle(res.data.title);
                setOriginalBody(res.data.body);
                setOriginalPublish(res.data.publish);
            })
        }
    }, [id, editing]);

    return (
        <div>
            <h1>{editing ? 'Edit Blog Post' : 'Create Blog Post'}</h1>
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
                    rows='10'
                />
            </div>
            <FormCheckSwitch
                isChecked={publish}
                onChange={onChangePublish}
            />
            <button
                className='btn btn-primary'
                onClick={onSubmit}
                disabled={editing && !isEdited()}
            >
                Post
            </button>
            <button
                className='btn btn-danger ms-2'
                onClick={goBack}
            >
                Cancel
            </button>
        </div>
    )
}

BlogForm.prototype = {
    editing: bool
}

BlogForm.defaultProps = {
    editing: false
}


export default BlogForm;