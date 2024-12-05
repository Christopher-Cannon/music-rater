import { StarSolid, StarHalfSolid, StarRegular } from "./stars";

const Rating = ({ rating }) => {
    let newRating = [
        <StarRegular key={5} />,
        <StarRegular key={4} />,
        <StarRegular key={3} />,
        <StarRegular key={2} />,
    ];

    const ratingInt = parseInt(rating);

    if (rating % 1) {
        newRating.unshift(<StarHalfSolid key={ratingInt + 1} />);
    }

    for (let i = 0; i < ratingInt; i++) {
        newRating.unshift(<StarSolid key={ratingInt - i} />);
    }

    return (
        <span className="rating">
            {newRating.map((star, idx) => (idx < 5 ? star : ""))}
        </span>
    );
};
export default Rating;
