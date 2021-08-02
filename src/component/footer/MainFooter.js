import React from 'react';
import Card from 'react-bootstrap/Card';

class MainFooter extends React.Component {
    render() {
        return (
            <Card className="text-center">
            <Card.Body>
                <Card.Text>
                Created by Mujtaba Zahidi
                </Card.Text>
            </Card.Body>
            </Card>
        );
    }
}

export default MainFooter;