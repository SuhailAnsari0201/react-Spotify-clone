import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

const Footer = () => {
  const [{ track }, dispatch] = useDataLayerValue();

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={track?.album.images[0].url}
          alt=""
        />
        <div className="footer__songInfo">
          <h4>{track?.name || "No Song Selected"}</h4>
          <p>{track?.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
