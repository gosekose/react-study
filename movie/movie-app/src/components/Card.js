const Card = ({ title, body, children }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="d-flex justify-content-between">
                    <p className="card-text">{body}</p>
                    {children && <div>{children}</div>}
                </div>
            </div>
        </div>
    );
}

export default Card;