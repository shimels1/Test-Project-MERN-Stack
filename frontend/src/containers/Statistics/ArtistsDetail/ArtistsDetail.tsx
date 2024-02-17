import { Component } from "react";
import axios from "../../../services/axios-songs";
import "./ArtistsDetail.css";

class ArtistsDetail extends Component {
  state = {
    detailAboutArtists: [],
  };

  color = "white";

  componentDidMount() {
    this.artistsSongAlbumCount();
  }

  // Get artists Song and Album Count
  artistsSongAlbumCount = () => {
    try {
      axios
        .get("/artists/songAlbumCount")
        .then((value) => {
          this.setState({ detailAboutArtists: value.data });
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
      <div className="ArtistsDetail">
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Total Songs</th>
              <th>Total Albums</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.detailAboutArtists.map((data: any) => (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.totalSongs}</td>
                <td>{data.totalAlbums}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArtistsDetail;
