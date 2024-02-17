import { Component } from "react";
import axios from "../../services/axios-songs";
import "./Statistics.css";
import { css } from "@emotion/css";
import { Button, Card } from "rebass";
import { NavLink } from "react-router-dom";
class Statistics extends Component {
  state = {
    totalArtists: "",
    totalAlbums: "",
    totalGenres: "",
    totalSongs: "",
  };

  color = "white";

  componentDidMount() {
    this.getTotalArtists();
    this.getTotalAlbums();
    this.getTotalGenres();
    this.getTotalSongs();
  }

  // Get total artists
  getTotalArtists = () => {
    try {
      axios
        .get("/artists/count")
        .then((value) => {
          this.setState({ totalArtists: value.data.totalArtists });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error getting songs:", error);
    }
  };

  // Get total albums
  getTotalAlbums = () => {
    try {
      axios
        .get("/albums/count")
        .then((value) => {
          this.setState({ totalAlbums: value.data.totalAlbums });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error getting songs:", error);
    }
  };

  // Get total genres
  getTotalGenres = () => {
    try {
      axios
        .get("/genres/count")
        .then((value) => {
          this.setState({ totalGenres: value.data.totalGenres });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error getting songs:", error);
    }
  };

  // Get total songs
  getTotalSongs = () => {
    try {
      axios
        .get("/songs/count")
        .then((value) => {
          this.setState({ totalSongs: value.data.totalSongs });
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
      <div className="">
        <div
          className={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10px;
            padding: 20px 10px;
          `}
        >
          <Card fontSize={2} fontWeight="bold" p={4} my={0} bg="#f6f6ff">
            <h2>Total Songs</h2>
            <h3>{this.state.totalSongs}</h3>
          </Card>

          <Card fontSize={2} fontWeight="bold" p={4} my={0} bg="#f6f6ff">
            <h2>Total Artists</h2>
            <h3>{this.state.totalArtists}</h3>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="artistsDetail"
            >
              <Button bg="gray" fontSize={1}>
                Show Detail
              </Button>
            </NavLink>
          </Card>

          <Card fontSize={2} fontWeight="bold" p={4} my={0} bg="#f6f6ff">
            <h2>Total Albums</h2>
            <h3>{this.state.totalAlbums}</h3>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="AlbumsSongCount"
            >
              <Button bg="gray" fontSize={1}>
                Show Detail
              </Button>
            </NavLink>
          </Card>

          <Card fontSize={2} fontWeight="bold" p={4} my={0} bg="#f6f6ff">
            <h2>Total Genres</h2>
            <h3>{this.state.totalGenres}</h3>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="GenresSongCount"
            >
              <Button bg="gray" fontSize={1}>
                Show Detail
              </Button>
            </NavLink>
          </Card>
        </div>
      </div>
    );
  }
}

export default Statistics;
