import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainImage from './Images/MainImage.js'

class MainBody extends React.Component {
    render() {
        return (
            <Container>
            <Row>
                <Col>Short description about me.</Col>
                <Col>
                    <MainImage />
                </Col>
            </Row>
            <Row>
                <Col>University background description.</Col>
            </Row>
            <Row>
                <Col>Project 1 description.</Col>
            </Row>
            <Row>
                <Col>Contact me section.</Col>
            </Row>
            </Container>
        );
    }
}

export default MainBody;