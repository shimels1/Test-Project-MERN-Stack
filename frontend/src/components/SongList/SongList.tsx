import React from "react";
import './SongList.css';

const songList = (probs: any) => {
  
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
              <td><button>Update</button>&nbsp;&nbsp;<button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default songList;
