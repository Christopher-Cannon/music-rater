const Tracklist = () => {
    return (
        <ol className="tracklist">
            <li className="track">
                <span className="track-number">1</span>
                <span className="track-title">Track Title</span>
                <span>12:55</span>
            </li>
            <li className="track">
                <span className="track-number">2</span>
                <span className="track-title">
                    Track Title That is Far too Long to be Comfortably Displayed
                    in the List
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
    );
};
export default Tracklist;
