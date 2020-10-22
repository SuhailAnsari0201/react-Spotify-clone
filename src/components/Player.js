import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
