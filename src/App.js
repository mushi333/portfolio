import React from "react";

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mujtaba Zahidi</a>
                </div>
            </nav>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Hi there!</h1>
                        <p className="lead text-muted">
                            You've stumbled onto my portfolio website somehow. Thank you for visiting. You can click on the two links
                            to go to my GitHub or LinkedIn. Or if you prefer, you can check out my projects down below.
                        </p>
                        <p>
                            <a className="btn btn-primary" href="https://github.com/mushi333">GitHub</a>
                            <a className="btn btn-secondary" href="https://www.linkedin.com/in/mujtaba-zahidi-52b5831a7/">LinkedIn</a>
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Projects</h1>
                        <p className="lead text-muted">
                            Nothing :(
                        </p>
                    </div>
                </div>
            </section>
            
            <footer className="text-muted py-5">
                <div className="py-5 text-center container">
                <p className="mb-1">Created by Mujtaba Zahidi 2021</p>
                </div>
            </footer>
        </div>
    );
};
export default App;
