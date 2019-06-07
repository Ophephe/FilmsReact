import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class MyForm extends Component {
  //state : ce qu'on va avoir dans le formulaire; un objet qui va récupérer les valeurs
  state = {
    //on met "" pour pouvoir afficher la valeur qu'on va mettre dans les champs
    title: "",
    description: "",
    image: "",
    url: ""
  };

  //on fait des fonctions handleChange et handleSubmit
  handleChange = event => {
    // on récupère event des onChange
    //setState pour changer la valeur du state
    this.setState({
      //[] : on créait un tableau car on a plusieurs champs
      [event.target.name]: event.target.value // name et value: cf name et value des champs dans le formulaire
    });
  };

  handleSubmit = event => {
    //event.preventDefault(); // permet de ne pas rafarichir la page
    console.log(
      "Le film a bien été enregistré : " + JSON.stringify(this.state)
    ); //this.state est notre objet

    //on récupère ce qu'il y a dans le state
    const { title, description, image, url } = this.state;

    //Pour envoyer à la base de données via notre api
    fetch("http://localhost:8000/api/film", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
        url: url
      })
    })
      .then(res => console.log(res.json))
      .catch(err => console.log(err));
  };

  //render : corps
  render() {
    const { title, description, image, url } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              name="title" // nom dans le state
              type="text"
              placeholder="Entrer un titre"
              value={title}
              onChange={this.handleChange} // prend la valeur qu'on a mis dans value, quand on clique sur onChange ça va créer un event
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="Entrer une description"
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="Ajouter une image"
              value={image}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Url</Form.Label>
            <Form.Control
              name="url"
              type="text"
              placeholder="Entrer un url"
              value={url}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Ajouter
          </Button>
        </Form>
      </div>
    );
  }
}

export default MyForm;
