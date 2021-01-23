import React from "react";
import { useGlobalContext } from "../context/context";

const Upload = () => {
  const { file, setFile, uploadSong } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("song", file);
    console.log(file);

    uploadSong(formData);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="file-field input-field">
        <div className="btn">
          <span>Song</span>
          <input
            type="file"
            name="song"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default Upload;
