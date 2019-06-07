import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Button } from "react-bootstrap";
import MyForm from "./Formulaire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ModalButton extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button variant="danger" size="lg" onClick={this.onOpenModal}>
          <FontAwesomeIcon icon="film" />
          &nbsp; Ajouter
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Ajouter un nouveau film</h2>
          <MyForm />
        </Modal>
      </div>
    );
  }
}

export default ModalButton;
