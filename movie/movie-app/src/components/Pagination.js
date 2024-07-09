import propTypes from 'prop-types'

const Pagination = ({ currentPage, numberOfPages, onClick, limit }) => {
    const currentSet = Math.ceil(currentPage / limit);
    const startPage = limit * (currentSet - 1) + 1;
    const lastSet = Math.ceil(numberOfPages / limit);
    const numberOfPagesForSet = currentSet === lastSet ? numberOfPages % limit : limit
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentSet === 1 ? 'disabled' : ''}`}>
                    <div
                        className="page-link cursor-pointer"
                        onClick={() => {
                            onClick(currentSet - 1)
                        }}
                    >Previous</div>
                </li>
                {
                    Array.from({ length: numberOfPagesForSet }, (_, index) => startPage + index).map((pageNumber) => {
                        return <li
                            key={pageNumber}
                            className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                        >
                            <div
                                className="page-link cursor-pointer"
                                onClick={() => {
                                    onClick(pageNumber)
                                }}
                            >{pageNumber}</div>
                        </li>;
                    })
                }
                <li className={`page-item ${currentSet === lastSet ? 'disabled' : ''}`}>
                    <div
                        className="page-link cursor-pointer"
                        onClick={() => {
                            onClick(startPage + limit)
                        }}
                    >Next</div>
                </li>
            </ul>
        </nav>
    );
}

Pagination.prototype = {
    currentPage: propTypes.number.isRequired,
    numberOfPages: propTypes.number.isRequired,
    onClick: propTypes.func.isRequired,
    limit: propTypes.number,
}

Pagination.defaultProps = {
    currentPage: 1,
    limit: 5,
}

export default Pagination;