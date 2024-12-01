import { Review, Tracklist } from "../components";
import Cover from "../assets/images/casiopea.jpg";

const Album = () => {
    return (
        <>
            <h2>
                Album Name
                <span className="album-artist">
                    <a href="#">Artist</a>
                </span>
            </h2>
            <div className="flex-md gap-2">
                <div className="album-sidebar">
                    <img src={Cover} alt="" />

                    <div>
                        <h3>Tracklist</h3>

                        <Tracklist />
                    </div>
                </div>
                <hr className="hide-on-desktop" />
                <div className="album-main">
                    <div className="album-info">
                        <div>
                            <span className="album-info-category">
                                Album Type
                            </span>
                            <span>Album</span>
                        </div>
                        <div>
                            <span className="album-info-category">
                                Released
                            </span>
                            <span>2002</span>
                        </div>
                        <div>
                            <span className="album-info-category">Genres</span>
                            <span>
                                <a href="#" className="major-genre">
                                    Jazz Fusion
                                </a>
                                , <a href="#">Jazz Funk</a>,{" "}
                                <a href="#">Jazz Rock</a>
                            </span>
                        </div>
                        <div>
                            <span className="album-info-category">
                                Language
                            </span>
                            <span>Japanese</span>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3>24 Reviews</h3>

                        <Review />
                        <Review />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Album;
