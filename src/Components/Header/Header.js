import React from "react";

export default class Header extends React.Component {
    constructor() {
        super();
        this.name = "Mujtaba Zahidi";
    }
        render() {
        return (   
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">{this.name}</a>
                </div>
            </nav>
        );
    }
}
