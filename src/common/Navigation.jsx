import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navigation({ isVisible }) {
    return (
        <nav
            className={"main-navigation" + (isVisible ? "" : " hide-on-mobile")}
        >
            <ul>
                <li>
                    <a href="#">Genres</a>
                </li>
                <li>
                    <a href="#">Lists</a>
                </li>
                <li>
                    <a href="#">Sign in</a>
                </li>
            </ul>

            <div className="search-box">
                <input
                    type="search"
                    name="general-search"
                    className="search-input"
                />
                <button type="submit" className="search-btn">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="search-icon"
                    />
                </button>
            </div>
        </nav>
    );
}

export default Navigation;
