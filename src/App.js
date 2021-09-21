import React from "react";
import CS from "./Images/csharp.png";
import JS from "./Images/js.png";
import python from "./Images/python.png";

const App = () => {
    return (
        <div>
            {/*Header*/}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mujtaba Zahidi</a>
                </div>
            </nav>

            {/*Body*/}            
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
                <h1 className="fw-light">Projects</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card text-dark bg-light mb-3 h-100">
                    <a href="https://github.com/mushi333/FIT5032_Portfolio">
                    <img src={CS} className="card-img-top" alt="C# icon" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Crypto"R"Us Portfolio for FIT5032</h5>
                        <p className="card-text">This application uses ASP.NET MVC5 to demonstrate features such as user authentication, email, calendar booking and more.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-dark bg-light mb-3 h-100">
                    <a href="https://github.com/mushi333/DeletoPy">
                    <img src={python} className="card-img-top" alt="ASP.NET Icon" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">DeletoPy</h5>
                        <p className="card-text">This Python application was made so that users can safely and efficiently delete files from their Windows system by specifing
                        the exempted file types and names to ignore.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-dark bg-light mb-3 h-100">
                    <a href="https://github.com/mushi333/2021-FIT4003-SBSE-for-self-driving-cars">
                    <img src={python} className="card-img-top" alt="ASP.NET Icon" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Search Based Software Testing for Autonomous Vehicles</h5>
                        <p className="card-text">This is my final honours research project on using genetic algorithms to create efficient and varied test cases for testing of
                        autonomous vehicles.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-dark bg-light mb-3 h-100">
                    <a href="https://github.com/mushi333/2021-FIT4003-SBSE-for-self-driving-cars">
                    <img src={JS} className="card-img-top" alt="ASP.NET Icon" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Mujtaba Zahidi Website</h5>
                        <p className="card-text">This is the link to how I made this website, the core technology used is React.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            {/*Footer*/}
            <hr></hr>
            <footer className="text-muted py-5">
                <div className="py-5 text-center container">
                <p className="mb-1">Created by Mujtaba Zahidi 2021</p>
                </div>
            </footer>
        </div>
    );
};
export default App;
