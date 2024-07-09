import PropTypes from 'prop-types';

const Card = ({ title, body, createdAt, onClick, children }) => {
    return (
        <div
            className="card mb-3 cursor-pointer"
            onClick={onClick}
        >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <small className="text-muted">{createdAt}</small>
                <div className="d-flex justify-content-between">
                    <p className="card-text">{body}</p>
                    {children && <div> {children} </div>}
                </div>
            </div>
        </div>
    );
}

Card.prototypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Card;