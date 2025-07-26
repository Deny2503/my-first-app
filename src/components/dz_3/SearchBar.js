function SearchBar({ value, onChange }) {
    return (
        <input type="text" placeholder="Пошук за прізвищем..." value={value}
            onChange={(e) => onChange(e.target.value)}
            className="search-bar"
        />
    );
}

export default SearchBar;