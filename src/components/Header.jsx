import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
    const [displayNav, setDisplayNav] = useState(false);

    return (
        <header className="page-header">
            <div className="header-contents wrapper">
                <div className="row-justified">
                    <h1 className="logo">
                        <Link to="/">
                            music<span className="logo-coloured">RATER</span>
                        </Link>
                    </h1>

                    <button
                        type="button"
                        onClick={() => setDisplayNav(!displayNav)}
                        className="nav-toggle-btn hide-on-desktop"
                    >
                        <FontAwesomeIcon icon={faBars} className="nav-bars" />
                    </button>
                </div>

                <Navigation isVisible={displayNav} />
            </div>
        </header>
    );
};

export default Header;
