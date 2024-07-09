import propTypes from 'prop-types'

const Pagination = ({ currentPage, numberOfPages, onClick }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <div
                        className="page-link cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            onClick(currentPage - 1)
                        }}
                    >Previous</div>
                </li>
                {
                    Array.from({ length: numberOfPages }, (_, index) => index + 1).map((pageNumber) => {
                        return <li
                            key={pageNumber}
                            className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                        >
                            <div
                                className="page-link cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClick(pageNumber)
                                }}
                            >{pageNumber}</div>
                        </li>;
                    })
                }
                <li className={`page-item ${currentPage === numberOfPages ? 'disabled' : ''}`}>
                    <div
                        className="page-link cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            onClick(currentPage + 1)
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
}

Pagination.defaultProps = {
    currentPage: 1
}

export default Pagination;