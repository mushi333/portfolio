import React from "react";
import IntroMessage from "./IntroMessage.js";
import PortfolioCards from "./PortfolioCards.js";

export default class Body extends React.Component {
    constructor() {
        super();
        this.message = "Created by Mujtaba Zahidi 2021";
    }
        render() {
        return (
            <div>
            <IntroMessage/>
            <section className="py-5 text-center container">
            <h1 className="fw-light">Projects</h1>               
            <PortfolioCards/>
            </section>
            </div>
        );
    }
}