import React from "react";

export default class IntroMessage extends React.Component {
    constructor() {
        super();
        this.callOut = "Hi there!";
        this.mainMessage = "You've stumbled onto my portfolio website somehow. Thank you for visiting. You can click on the two links to go to my GitHub or LinkedIn. Or if you prefer, you can check out my projects down below.";
        this.github = "GitHub";
        this.linkedIn = "LinkedIn";
        this.linkedInURL = "https://github.com/mushi333";
        this.githubURL = "https://www.linkedin.com/in/mujtaba-zahidi-52b5831a7/";
    }
        render() {
        return (   
            <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">{this.callOut}</h1>
                    <p className="lead text-muted">
                        {this.mainMessage}
                    </p>
                    <p>
                        <a className="btn btn-primary" href={this.linkedInURL}>{this.github}</a>
                        <a className="btn btn-secondary" href={this.githubURL}>{this.linkedIn}</a>
                    </p>
                </div>
            </div>
        </section>
        );
    }
}
