import { useEffect, useState } from "react";
import { StarSolid, StarHalfSolid, StarRegular } from "./stars";

const Rating = ({ rating }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        let output = [];
        let key = 0;

        let solids = Math.floor(parseInt(rating));
        let regulars = Math.floor(5.0 - parseFloat(rating));

        for (let i = 0; i < solids; i++) {
            output.push(<StarSolid key={key} />);
            key++;
        }

        if (solids + regulars < 5) {
            output.push(<StarHalfSolid key={key} />);
            key++;
        }

        for (let i = 0; i < regulars; i++) {
            output.push(<StarRegular key={key} />);
            key++;
        }

        setStars(output);
    }, []);

    return <span className="rating">{stars.map((stars) => stars)}</span>;
};
export default Rating;
