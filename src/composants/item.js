import React, { Component } from "react";
import "../App.css";
import { Col, Container, Row, Image } from "react-bootstrap";

class Item extends Component {
  render() {
    const { titre, image } = this.props; // mêmes noms que dans item-list pour récupérer les valeurs

    return (
      //alt s'affiche quand pas d'image
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <Image
                src={image}
                alt="image"
                style={{ width: 150, height: 200 }}
                rounded
                align="center"
              />
            </Col>
            <div className="Ecriture2">
              <Col md={12}>
                <h3 align="center">
                  <b>{titre}</b>
                </h3>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Item;
