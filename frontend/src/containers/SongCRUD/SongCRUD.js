import { Component } from "react";
import axios from "../../services/axios-songs";
import SongList from "../../components/SongList/SongList";
import AddSong from "../../components/AddSong/AddSong";
import "./SongCRUD.css";
import UpdateSong from "../../components/UpdateSong/UpdateSong";
import * as actionTypes from "../../store/actions";

import { connect } from "react-redux";
class SongCRUD extends Component {
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
          this.props.onSongsChange(value.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  addSongHundler = async (data) => {
    try {
      await axios
        .post("/post", data)
        .then((value) => {
          this.closeAddSongModalHundler();
          this.getAllSongs();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  updateSongHundler = async (data) => {
    try {
      await axios
        .put("/put/" + data._id, data)
        .then((value) => {
          this.closeUpdateSongModalHundler();
          this.getAllSongs();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  deleteSongHundler = async (id) => {
    try {
      await axios
        .delete("/delete/" + id)
        .then((value) => {
          this.getAllSongs();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  showAddSongModalHundler = () => {
    this.setState({ showAddSongModal: true });
  };

  closeAddSongModalHundler = () => {
    this.setState({ showAddSongModal: false });
  };

  showUpdateSongModalHundler = (id) => {
    const song = this.props.songs.find((s) => s._id === id);
    this.setState({ tempUpdateSongData: song });
    this.setState({ showUpdateSongModal: true });
  };

  closeUpdateSongModalHundler = () => {
    this.setState({ showUpdateSongModal: false });
  };

  render() {
    return (
      <div className="">
        <div className="songCRUD">
          <button onClick={this.showAddSongModalHundler}>Add</button>
        </div>
        <SongList
          deleteSong={this.deleteSongHundler}
          updateSong={this.showUpdateSongModalHundler}
        />
        <AddSong
          closeSongModal={this.closeAddSongModalHundler}
          showSongModal={this.state.showAddSongModal}
          addSong={this.addSongHundler}
        ></AddSong>
        <UpdateSong
          closeSongModal={this.closeUpdateSongModalHundler}
          showSongModal={this.state.showUpdateSongModal}
          data={this.state.tempUpdateSongData}
          updateSong={this.updateSongHundler}
        ></UpdateSong>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSongsChange: (song) => dispatch({ type: actionTypes.ADD_SONGS, song: song })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongCRUD);

