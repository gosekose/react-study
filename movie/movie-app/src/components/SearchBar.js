const SearchBar = ({ value, onChange, onKeyUp }) => {
    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            onKeyUp();
        }
    };

    return (
        <input
            type="text"
            placeholder="검색"
            className="form-control"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e)}
        />
    );
}

export default SearchBar;