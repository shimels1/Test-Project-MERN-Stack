import React, { useState } from "react";
import "./AddSong.css";

const AddSong = (props: any) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    album: "",
  });

  const handleSubmit = (e: any) => {};

  const handleChange = (e: any) => {};

  return props.showAddSongModal ? (
    <div>
      <div className="Backdrop">
        <div
          className="Modal"
          style={{
            transform: props.showAddSongModal
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: props.showAddSongModal ? "1" : "0",
          }}
        >
          <h2>Add a New Song</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="artist">Artist:</label>
              <input
                type="text"
                id="artist"
                value={formData.artist}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                value={formData.genre}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="album">Album:</label>
              <input
                type="text"
                id="album"
                value={formData.album}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit">Add Song</button>
          </form>
          <button onClick={props.clothModal}>CANCEL</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddSong;
