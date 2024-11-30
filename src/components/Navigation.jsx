import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = ({ isVisible }) => {
    return (
        <nav
            className={"main-navigation" + (isVisible ? "" : " hide-on-mobile")}
        >
            <ul>
                <li>
                    <Link to="/genres">Genres</Link>
                </li>
                <li>
                    <Link to="/lists">Lists</Link>
                </li>
                <li>
                    <Link to="/login">Sign in</Link>
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
};

export default Navigation;
