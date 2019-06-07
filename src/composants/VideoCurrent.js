import React, { Component } from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";

class VideoCurrent extends Component {
  render() {
    const { url } = this.props;
    return (
      <div>
        <Container align="center">
          <Row>
            <Col>
              <iframe
                title="video"
                align="left"
                width="1000"
                height="563"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default VideoCurrent;
