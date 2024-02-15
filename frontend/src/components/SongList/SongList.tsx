import React from "react";
import "./SongList.css";

const songList = (probs: any) => {
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
          {probs.songList.map((song: any) => (
            <tr key={song._id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>
                <button onClick={() => update(song._id)}>Update</button>
                &nbsp;&nbsp;
                <button onClick={() => deleteRow(song._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default songList;
