import React from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "../DataLayer";

const SidebarOption = ({ spotify, title, Icon, id }) => {
  const [{}, dispatch] = useDataLayerValue();

  const changePlaylist = (id, e) => {
    dispatch({
      type: "SET_CURRENT_PLAYLIST",
      id: id,
    });
    spotify.getPlaylistTracks(id).then((response) => {
      dispatch({
        type: "SET_TRACKS",
        tracks: response,
      });
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p onClick={(e) => changePlaylist(id, e)}>{title}</p>
      )}
    </div>
  );
};

export default SidebarOption;
