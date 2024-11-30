import { Rating } from "../components";
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

                        <ol className="tracklist">
                            <li className="track">
                                <span className="track-number">1</span>
                                <span className="track-title">Track Title</span>
                                <span>12:55</span>
                            </li>
                            <li className="track">
                                <span className="track-number">2</span>
                                <span className="track-title">
                                    Track Title That is Far too Long to be
                                    Comfortably Displayed in the List
                                </span>
                                <span>4:42</span>
                            </li>
                            <li className="track">
                                <span className="track-number">3</span>
                                <span className="track-title">Track Title</span>
                                <span>8:25</span>
                            </li>
                            <li className="track">
                                <span className="track-number">4</span>
                                <span className="track-title">Track Title</span>
                                <span>10:58</span>
                            </li>
                        </ol>
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

                        <article className="review">
                            <header className="review-header">
                                <a href="#">SomeReviewer</a>
                                <span>Aug 15 2015</span>
                                <Rating rating="3.5" />
                            </header>

                            <p className="review-body">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Suscipit necessitatibus eum
                                iusto, numquam ipsa alias aperiam accusantium at
                                enim modi, assumenda illo, quae dolore esse
                                expedita unde. Sequi, earum iusto!
                            </p>

                            <hr />
                        </article>

                        <article className="review">
                            <header className="review-header">
                                <a href="#">SomeOtherReviewer</a>
                                <span>Aug 21 2015</span>
                                <Rating rating="3" />
                            </header>

                            <p className="review-body">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Suscipit necessitatibus eum
                                iusto, numquam ipsa alias aperiam accusantium at
                                enim modi, assumenda illo, quae dolore esse
                                expedita unde. Sequi, earum iusto!
                            </p>

                            <hr />
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Album;
