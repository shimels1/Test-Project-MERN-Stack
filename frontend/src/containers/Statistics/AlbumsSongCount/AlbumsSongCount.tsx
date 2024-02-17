import { Component } from "react";
import axios from "../../../services/axios-songs";
import "./AlbumsSongCount.css";
import { css } from "@emotion/css";

class AlbumsSongCount extends Component {
  state = {
    albumsSongCountList: [],
  };

  color = "white";

  componentDidMount() {
    this.artistsSongAlbumCount();
  }

  // Get artists Song and Album Count
  artistsSongAlbumCount = () => {
    try {
      axios
        .get("/albums/songCount")
        .then((value) => {
          this.setState({ albumsSongCountList: value.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error getting songs:", error);
    }
  };

  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        `}
      >
        <table>
          <thead>
            <tr>
              <th>Albums</th>
              <th>Total Songs</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.albumsSongCountList.map((data: any) => (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.totalSongs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AlbumsSongCount;
