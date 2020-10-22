import React, { useState, useEffect } from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "../DataLayer";
import {
  PlayCircleFilled,
  PauseCircleFilled,
  Favorite,
  MoreHoriz,
} from "@material-ui/icons";

const Body = ({ spotify }) => {
  const [
    { current_playlist, discover_weekly, tracks },
    dispatch,
  ] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src={
            current_playlist
              ? current_playlist?.images[0].url
              : "https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png"
          }
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{current_playlist?.name || discover_weekly?.name}</h2>
          <p>{current_playlist?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PauseCircleFilled className="body__shuffle" />
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {/* List of Songs */}
        {/* {discover_weekly?.tracks?.items.map((item) => ( */}
        {tracks?.items.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
