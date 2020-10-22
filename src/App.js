import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token || token) {
      if (_token) {
        spotify.setAccessToken(_token);
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
      } else {
        spotify.setAccessToken(token);
        dispatch({
          type: "SET_TOKEN",
          token: token,
        });
      }

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify
        .getPlaylist("37i9dQZEVXcJZyENOWUFo7")
        .then((response) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        })
        .catch((err) => {
          dispatch({ type: "ERROR" });
        });
    }
  }, [token]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
//37i9dQZEVXcJZyENOWUFo7
//7DxeXCifMMait81HRxPJCl
