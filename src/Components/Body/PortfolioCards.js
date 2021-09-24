import React from "react";
import CS from "../../Images/csharp.png";
import JS from "../../Images/js.png";
import PY from "../../Images/python.png";

class CardCS extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.link = props.link;
        this.alt = props.alt;
        this.desc = props.desc;
    }

    render () {
        return (
            <div>
            <div className="col">
                <div className="card text-dark bg-light mb-3 h-100">
                    <a href={this.link}>
                    <img src={CS} className="card-img-top" alt={this.alt} />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">{this.title}</h5>
                        <p className="card-text">{this.desc}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

class CardJS extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.link = props.link;
        this.alt = props.alt;
        this.desc = props.desc;
        this.image = props.image;
    }

    render () {
        return (
            <div>
            <div className="col">
                <div className="card text-dark bg-light mb-3 h-100">
                    <a href={this.link}>
                    <img src={JS} className="card-img-top" alt={this.alt} />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">{this.title}</h5>
                        <p className="card-text">{this.desc}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

class CardPY extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.link = props.link;
        this.alt = props.alt;
        this.desc = props.desc;
        this.image = props.image;
    }

    render () {
        return (
            <div>
            <div className="col">
                <div className="card text-dark bg-light mb-3 h-100">
                    <a href={this.link}>
                    <img src={PY} className="card-img-top" alt={this.alt} />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">{this.title}</h5>
                        <p className="card-text">{this.desc}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default class PortFolioCards extends React.Component {
    constructor() {
        super();
    }
        render() {
        
        return (
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <CardCS title="Crypto'R'Us Portfolio for FIT5032" link="https://github.com/mushi333/FIT5032_Portfolio" 
            alt="C# icon" desc="This application uses ASP.NET MVC5 to demonstrate features such as user authentication, email, 
            calendar booking and more."/>
            <CardPY title="DeletoPy" link="https://github.com/mushi333/DeletoPy" 
            alt="Python icon" desc="his Python application was made so that users can safely and efficiently delete files from their Windows system by specifing
            the exempted file types and names to ignore."/>
            <CardPY title="Search Based Software Testing for Autonomous Vehicles" link="https://github.com/mushi333/2021-FIT4003-SBSE-for-self-driving-cars" 
            alt="Python icon" desc="This is my final honours research project on using genetic algorithms to create efficient and varied test cases for testing of
            autonomous vehicles."/>
            <CardJS title="Mujtaba Zahidi Website" link="https://github.com/mushi333/portfolio" 
            alt="Javascript icon" desc="This is the link to how I made this website, the core technology used is React."/>
            </div>
        );
    }
}