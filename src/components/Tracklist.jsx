import Track from "./Track";

const tracks = [
    {
        id: 1,
        title: "Time Limit",
        duration: "3:07",
    },
    {
        id: 2,
        title: "Tears of the Star",
        duration: "4:32",
    },
    {
        id: 3,
        title: "Space Road",
        duration: "5:14",
    },
    {
        id: 4,
        title: "Midnight Rendevouz",
        duration: "5:20",
    },
    {
        id: 5,
        title: "Far Away",
        duration: "3:55",
    },
    {
        id: 6,
        title: "Swallow",
        duration: "4:24",
    },
    {
        id: 7,
        title: "Dream Hill",
        duration: "5:39",
    },
    {
        id: 8,
        title: "Black Joke",
        duration: "4:17",
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
