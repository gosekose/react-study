const NoItem = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.message}</h1>
            </div>
        </div>
    );
}

export default NoItem;