import React, { Component } from "react";
import "../App.css";

class VideoDetail extends Component {
  render() {
    const { titre, description } = this.props; // mêmes noms que dans item-list pour récupérer les valeurs

    return (
      //alt s'affiche quand pas d'image
      <div className="row">
        <div className="col col-md-12">
          <h1 align="center">
            <u>
              <b>{titre}</b>
            </u>
          </h1>

          {description}
        </div>
      </div>
    );
  }
}

export default VideoDetail;
