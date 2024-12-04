import { StarSolid, StarHalfSolid, StarRegular } from "./stars";

const Rating = ({ rating }) => {
    let newRating = [
        <StarRegular key={5} />,
        <StarRegular key={4} />,
        <StarRegular key={3} />,
        <StarRegular key={2} />,
    ];

    if (rating % 1) {
        newRating.unshift(<StarHalfSolid key={parseInt(rating) + 1} />);
    }

    for (let i = 0; i < parseInt(rating); i++) {
        newRating.unshift(<StarSolid key={parseInt(rating) - i} />);
    }

    return (
        <span className="rating">
            {newRating.map((star, idx) => (idx < 5 ? star : ""))}
        </span>
    );
};
export default Rating;
