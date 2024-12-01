import { Rating } from "../components";

const Review = () => {
    return (
        <article className="review">
            <header className="review-header">
                <a href="#">SomeReviewer</a>
                <span>Aug 15 2015</span>
                <Rating rating="3.5" />
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
