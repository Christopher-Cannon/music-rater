import Track from "./Track";

const tracks = [
    {
        id: 1,
        title: "Track Title",
        duration: "12:55",
    },
    {
        id: 2,
        title: "Another Track",
        duration: "7:24",
    },
    {
        id: 3,
        title: "This is Track Three",
        duration: "3:19",
    },
    {
        id: 4,
        title: "Track Title Four",
        duration: "9:58",
    },
];

const Tracklist = () => {
    return (
        <ol className="tracklist">
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    number={track.id}
                    title={track.title}
                    duration={track.duration}
                />
            ))}
        </ol>
    );
};
export default Tracklist;
