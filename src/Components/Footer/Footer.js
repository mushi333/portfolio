import React from "react";

export default class Footer extends React.Component {
    constructor() {
        super();
        this.message = "Created by Mujtaba Zahidi 2021";
    }
        render() {
        return (
            <div>
            <hr></hr>
            <footer className="text-muted py-5">
                <div className="py-5 text-center container">
                <p className="mb-1">{this.message}</p>
                </div>
            </footer>
            </div>   
        );
    }
}