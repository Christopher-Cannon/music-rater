const Track = ({ number, title, duration }) => {
    return (
        <li className="track">
            <span className="track-number">{number}</span>
            <span className="track-title">{title}</span>
            <span>{duration}</span>
        </li>
    );
};
export default Track;
