import React from "react";
import "./SongRow.css";
import { useDataLayerValue } from "../DataLayer";
const SongRow = ({ track = "test" }) => {
  const [{}, dispatch] = useDataLayerValue();

  const changeTrack = (e, track) => {
    dispatch({
      type: "SET_TRACK",
      track: track,
    });
  };
  return (
    <div className="songRow" onClick={(e) => changeTrack(e, track)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
