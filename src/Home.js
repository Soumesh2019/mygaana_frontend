import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

import firebase from "./config/firebase_config";

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("songs")
      .on("value", (snapshot) => {
        try {
          const songsArray = Object.values(snapshot.val());
          setSongs(songsArray);
        } catch (error) {
          console.log(error);
        }
      });
  }, []);

  return songs.length !== 0 ? (
    songs
      .map((song, index) => {
        return (
          <div className="myContainer" key={index}>
            <ReactAudioPlayer
              src={song.url}
              loop
              controls
              style={{ width: "100%" }}
            />
            <h6>Uploaded By:- {song.email}</h6>
            <hr />
          </div>
        );
      })
      .reverse()
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
