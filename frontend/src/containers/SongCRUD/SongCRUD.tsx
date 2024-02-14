import { Component } from "react";
import axios from "../../services/axios-songs";
import SongList from "../../components/SongList/SongList";
import AddSong from "../../components/AddSong/AddSong";
import "./SongCRUD.css";

class SongCRUD extends Component {
  state = {
    songList: [],
    showAddSongModal: false,
  };

  componentDidMount() {
    axios
      .get("/getAll")
      .then((value) => {
        this.setState({ songList: value.data });
      })
      .catch((value) => {
        console.log(value);
      });
  }

  addSongHundler = () => {
    this.setState({ showAddSongModal: true });
  };
  addSongClothModalHundler = () => {
    this.setState({ showAddSongModal: false });
  };

  render() {
    let orderSummery = null;
    if (0 == 0) {
      orderSummery = <AddSong></AddSong>;
    } else {
      // orderSummery = <Spinner />;
    }

    return (
      <div className="">
        <div className="songCRUD">
          <button onClick={this.addSongHundler}>Add</button>
        </div>

        <SongList songList={this.state.songList} />
        <AddSong
          clothModal={this.addSongClothModalHundler}
          showAddSongModal={this.state.showAddSongModal}
        ></AddSong>
      </div>
    );
  }
}

export default SongCRUD;
