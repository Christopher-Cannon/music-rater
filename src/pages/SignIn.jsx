const SignIn = () => {
    return (
        <>
            <div className="flex-md gap-2">
                <div className="column col-thinner">
                    <h2>Sign In</h2>

                    <p>Please log in if you already have an account</p>

                    <form className="form">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />

                        <button type="submit" className="btn">
                            Sign In
                        </button>

                        <hr />

                        <button type="button" className="btn btn-smaller">
                            Forgot Your Password?
                        </button>
                    </form>
                </div>
                <div className="column col-thinner">
                    <h2>Register an Account</h2>

                    <div className="info-box">
                        <p>
                            There are many benefits that come with a Music Rater
                            account:
                        </p>
                        <ul>
                            <li>Rate and review your music</li>
                            <li>
                                Research music, cross-referenced by artist and
                                genre
                            </li>
                            <li>
                                Create and publish lists of your favourite
                                things
                            </li>
                        </ul>
                    </div>
                    <form className="form">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                        <label htmlFor="password-two">Password(retype)</label>
                        <input type="password" name="password-two" />
                        <button type="submit" className="btn">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default SignIn;
