import React, { useState } from "react";
import "./AddSong.css";

const AddSong = (props: any) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [album, setAlbum] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addSong({ title, artist, genre, album });
  };

  return props.showSongModal ? (
    <div>
      <div className="Backdrop">
        <div
          className="Modal"
          style={{
            transform: props.showSongModal
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: props.showSongModal ? "1" : "0",
          }}
        >
          <h2>Add a New Song</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="artist">Artist:</label>
              <input
                type="text"
                id="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="album">Album:</label>
              <input
                type="text"
                id="album"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
              />
            </div>
            <button type="submit">Add Song</button>
          </form>
          <button onClick={props.closeSongModal}>CANCEL</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddSong;