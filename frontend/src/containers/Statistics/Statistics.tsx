import { Component } from "react";
import axios from "../../services/axios-songs";
import "./Statistics.css";
class Statistics extends Component {
  state = {
    showAddSongModal: false,
    showUpdateSongModal: false,
    tempUpdateSongData: {},
  };

  componentDidMount() {
    this.getAllSongs();
  }

  getAllSongs = () => {
    try {
      axios
        .get("/getAll")
        .then((value) => {
          console.log(value)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  render() {
    return <div className="">hello</div>;
  }
}

export default Statistics;
