const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Song = require("../models/Song");

// Get all songs
app.get("/getAll", async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a song by id
app.get("/get/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (song) {
      res.status(200).json(song);
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new song
app.post("/post", async (req, res) => {
  try {
    console.log(req.body)
    const song = new Song(req.body);
    await song.save();

    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a song by id
app.put("/put/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (song) {
      res.status(200).json(song);
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a song by id
app.delete("/delete/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (song) {
      res.status(200).json({ message: "Song deleted" });
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the total count of artists
app.get("/artists/count", async (req, res) => {
  try {
    const uniqueArtists = await Song.distinct("artist");
    const artistCount = uniqueArtists.length;
    res.json({ totalArtists: artistCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get the total count of albums
app.get("/albums/count", async (req, res) => {
  try {
    const uniqueAlbums = await Song.distinct("album");
    const albumsCount = uniqueAlbums.length;
    res.json({ totalAlbums: albumsCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get the total count of genres
app.get("/genres/count", async (req, res) => {
  try {
    const uniqueGenres = await Song.distinct("genre");
    const albumsCount = uniqueGenres.length;
    res.json({ totalGenres: albumsCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get the total count of songs
app.get("/songs/count", async (req, res) => {
  try {
    const songCount = await Song.countDocuments();
    res.json({ totalSongs: songCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get the count of songs in each genre
app.get("/songs/genreCount", async (req, res) => {
  try {
    const genreCounts = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);
    res.json(genreCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get the count of songs and albums for each artist
app.get("/artists/songAlbumCount", async (req, res) => {
  try {
    const artists = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          totalSongs: { $sum: 1 },
          uniqueAlbums: { $addToSet: "$album" },
        },
      },
      {
        $addFields: {
          totalAlbums: { $size: "$uniqueAlbums" },
        },
      },
      {
        $project: {
          _id: 1,
          totalSongs: 1,
          totalAlbums: 1,
        },
      },
    ]);
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get the count of songs in each album
app.get("/albums/songCount", async (req, res) => {
  try {
    const albums = await Song.aggregate([
      {
        $group: {
          _id: "$album",
          totalSongs: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "albums",
          localField: "_id",
          foreignField: "_id",
          as: "albumDetails",
        },
      },
      {
        $project: {
          _id: 1,
          title: { $arrayElemAt: ["$albumDetails.title", 0] },
          totalSongs: 1,
        },
      },
    ]);
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
