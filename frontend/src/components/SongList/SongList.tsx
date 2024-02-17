import { Button } from "rebass";
import "./SongList.css";
import { connect } from "react-redux";

const SongList = (probs: any) => {
  const update = (id: any) => {
    probs.updateSong(id);
  };

  const deleteRow = (id: string) => {
    probs.deleteSong(id);
  };

  return (
    <div className="songList">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {probs.songs.map((song: any) => (
            <tr key={song._id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>
                <Button
                  bg="gray"
                  type="submit"
                  fontSize={1}
                  onClick={() => update(song._id)}
                >
                  Update
                </Button>
                &nbsp;&nbsp;
                <Button
                  bg="gray"
                  type="submit"
                  fontSize={1}
                  onClick={() => deleteRow(song._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  {
    return {
      songs: state.songs,
    };
  }
};

export default connect(mapStateToProps)(SongList);
