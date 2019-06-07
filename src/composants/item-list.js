import React, { Component } from "react";
import Item from "./item";
import VideoCurrent from "./VideoCurrent";
import VideoDetail from "./videodetails";

class Listitems extends Component {
  state = {
    resultat: [],
    isLoad: true,
    Videourl: "",
    TitreVideo: "",
    DescriptionVideo: ""
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/films")
      .then(res => res.json())
      .then(data => this.setState({ resultat: data, isLoad: false }));
  }

  render() {
    const {
      resultat,
      isLoad,
      Videourl,
      TitreVideo,
      DescriptionVideo
    } = this.state;

    const renderitem = !isLoad ? (
      resultat.data.map(item => {
        return (
          <div
            className="VideoItem"
            key={item.id}
            onClick={() =>
              this.setState({
                Videourl: item.url,
                TitreVideo: item.title,
                DescriptionVideo: item.description
              })
            }
            onLoad={() =>
              this.setState({
                Videourl: resultat.data[0].url,
                TitreVideo: resultat.data[0].title,
                DescriptionVideo: resultat.data[0].description
              })
            }
          >
            <Item titre={item.title} image={item.image} />
            <hr />
          </div>
        );
      })
    ) : (
      <p> Chargement de données en cours ... </p>
    );
    return (
      <div className="row">
        <div className="col-md-8">
          <VideoCurrent url={Videourl} />
          <br />
          <VideoDetail titre={TitreVideo} description={DescriptionVideo} />
        </div>
        <div className="col-md-4">{renderitem} </div>
      </div>
    );
  }
}

export default Listitems;
