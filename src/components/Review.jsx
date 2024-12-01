import { Rating } from "../components";

const Review = ({ reviewer, publishDate, rating }) => {
    return (
        <article className="review">
            <header className="review-header">
                <a href="#">{reviewer}</a>
                <span>{publishDate}</span>
                <Rating rating={rating} />
            </header>

            <p className="review-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit necessitatibus eum iusto, numquam ipsa alias aperiam
                accusantium at enim modi, assumenda illo, quae dolore esse
                expedita unde. Sequi, earum iusto!
            </p>

            <hr />
        </article>
    );
};
export default Review;
