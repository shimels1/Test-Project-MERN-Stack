import { Component } from "react";
import axios from "../../../services/axios-songs";
import "./GenresSongCount.css";

class GenresSongCount extends Component {
  state = {
    genresSongCountList: [],
  };

  color = "white";

  componentDidMount() {
    this.getGenresSongCount();
  }

  // Get Genres Song Count
  getGenresSongCount = () => {
    try {
      axios
        .get("/songs/genreCount")
        .then((value) => {
          this.setState({ genresSongCountList: value.data });
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
      <div className="GenresSongCount">
        <table>
          <thead>
            <tr>
              <th>Genres</th>
              <th>Total Song</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.genresSongCountList.map((data: any) => (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GenresSongCount;
