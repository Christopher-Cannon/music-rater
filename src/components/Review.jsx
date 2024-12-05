import { Rating } from "../components";

const Review = ({ reviewer, publishDate, rating, children }) => {
    return (
        <article className="review">
            <header className="review-header">
                <a href="#">{reviewer}</a>
                <span>{publishDate}</span>
                <Rating rating={rating} />
            </header>

            {children}

            <hr />
        </article>
    );
};
export default Review;
