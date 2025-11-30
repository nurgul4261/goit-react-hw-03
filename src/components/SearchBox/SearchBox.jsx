import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div className={styles.searchBox}>
            <label className={styles.label} htmlFor="search">
                Find contacts by name
                <input
                    type="text"
                    id="search"
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}
                    className={styles.input}
                />
            </label>
        </div>
    );
}
export default SearchBox;