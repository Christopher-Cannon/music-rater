import { AlbumListHeader, AlbumRow } from "../components";
import Cover from "../assets/images/casiopea.jpg";

const Artist = () => {
    return (
        <>
            <h2>Casiopea</h2>
            <div className="flex-md gap-2">
                <div className="sidebar">
                    <img src={Cover} alt="Album cover" />
                </div>
                <div>
                    <div className="info">
                        <div>
                            <span className="info-category">Formed</span>
                            <span>1995, Some Place, Somewhere</span>
                        </div>
                        <div>
                            <span className="info-category">Disbanded</span>
                            <span>2009</span>
                        </div>
                        <div>
                            <span className="info-category">Members</span>
                            <span>Member A, Member B, Member C</span>
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
                    </div>
                    <hr className="hide-on-laptop" />
                </div>
            </div>
            <div className="flex-lg">
                <div className="main-content order-end">
                    <h3 className="album-list-heading">Album</h3>

                    <table>
                        <AlbumListHeader />
                        <AlbumRow />
                        <AlbumRow />
                    </table>

                    <h3 className="album-list-heading">EP</h3>

                    <table>
                        <AlbumListHeader />
                        <AlbumRow />
                    </table>

                    <hr className="hide-on-desktop" />
                </div>
                <div className="sidebar">
                    <h3>15 Lists</h3>

                    <div className="user-lists">
                        <div className="user-list">
                            <a href="#">Name of a List</a>
                            <a href="#">SomeUser35</a>
                        </div>
                        <div className="user-list">
                            <a href="#">some other list with a longer name</a>
                            <a href="#">Jilfs</a>
                        </div>
                        <div className="user-list">
                            <a href="#">Yet Another List</a>
                            <a href="#">udjem</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Artist;