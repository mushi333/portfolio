import React from 'react';
import Container from 'react-bootstrap/Container';

class MainImage extends React.Component {
    render() {
        const ImgStyle = {
            borderRadius: "25px",
            border: "1px solid #73AD21",
            // padding: "20px",
            width: "500px",
            height: "500px",
          };

        return (
            <Container>
                <img style={ImgStyle} src="https://i1.sndcdn.com/avatars-000733480873-p8zrxk-t500x500.jpg" alt="Kouichi Hirose from JOJO anime series." width="500" height="500" />
            </Container>
        );
    }
}

export default MainImage;