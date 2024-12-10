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
                <div className="sidebar">
                    <img src={Cover} alt="Album cover" />

                    <div>
                        <h3>Tracklist</h3>

                        <Tracklist />
                    </div>
                </div>
                <div className="main-bar">
                    <div className="info">
                        <div>
                            <span className="info-category">Type</span>
                            <span>Album</span>
                        </div>
                        <div>
                            <span className="info-category">Released</span>
                            <span>25 May 1979</span>
                        </div>
                        <div>
                            <span className="info-category">Rating</span>
                            <span>
                                <span className="album-rating">3.88</span> / 5.0
                            </span>
                        </div>
                        <div>
                            <span className="info-category">Genres</span>
                            <span>
                                <a href="#" className="major-genre">
                                    Jazz Fusion
                                </a>
                                , <a href="#">Jazz Funk</a>,{" "}
                                <a href="#">Jazz Rock</a>
                            </span>
                        </div>
                        <div>
                            <span className="info-category">Language</span>
                            <span>Japanese</span>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3>24 Reviews</h3>

                        <Review
                            reviewer="Gayal"
                            publishDate="Oct 21 2024"
                            rating="5"
                        >
                            <p className="review-summary">
                                One for the greatest fusion albums out there,
                                sonically and musically its own
                            </p>

                            <p className="review-body">
                                I've never heard anything like this, or at least
                                anything that tries to sound like this and
                                succeeds. It has its own mystical aura
                                surrounding it, a vibe so immaculate and so
                                undeniably its own. Songs like Tears of the Star
                                and Midnight Renezvous are so damn magical and
                                sincere and carry such a beautiful sound
                                throughout them, and the rest of the album in
                                turn. The entire album is like this, though the
                                first half is better than the second (both are
                                amazing). This is a beautiful, and in my
                                opinion, life changing album. It warped my
                                perception on jazz and music, and showed me what
                                was possible. 10/10, the most fun album ever
                            </p>
                        </Review>
                        <Review
                            reviewer="jackharm"
                            publishDate="Aug 19 2024"
                            rating="5"
                        >
                            <p className="review-summary">
                                The single greatest piece of instrumental music
                                I've ever had the pleasure of listening to
                            </p>

                            <p className="review-body">
                                front to back, this album was an absolute
                                euphoric listening experience and every single
                                track on this thing was nothing short of a
                                masterpiece. retro-futurism at its finest.
                                <br />
                                <br /> you could give me a choice between $1000
                                and another spin of this album and i'd take this
                                album without hesitation. listening to this for
                                the first time, my ears entered nirvana. the
                                sound waves were being cast down from the
                                heavens. there is no doubt in my mind that there
                                was some sort of spiritual epiphany that
                                resulted in the creation of this album. its
                                ridiculous to suggest that GOD didn't have a
                                hand in making this thing. absolutely
                                angelically transcendent.
                                <br />
                                <br /> 10/10
                                <br /> Fav track: Tears of the Star
                            </p>
                        </Review>
                        <Review
                            reviewer="JinJX"
                            publishDate="Jun 13 2024"
                            rating="4.5"
                        >
                            <p className="review-summary">
                                [how 2 make a cool japanese jazzy entrance]
                            </p>

                            <p className="review-body">
                                Straight out of the gate, Casiopea cemented
                                their place in the Jazz fusion scene with this
                                monumental feat of a debut record. Literal
                                perfection in my book.
                                <br />
                                (this is genuinely one of my personal favorite
                                jazz-fusion albums of all the times,,,)
                                <br />
                                <br /> The debut self-titled album is a mostly
                                instrumental album with fantastic
                                instrumentation and great vocals. I am
                                absolutely all for 36 minutes of fun and
                                intricate sounding jazz, because this entire
                                album from front to back was an wonderfully
                                entertaining experience.
                                <br /> <br /> "great sounding, influential jazz
                                record like what more can I say just go listen
                                to it"
                            </p>
                        </Review>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Album;
