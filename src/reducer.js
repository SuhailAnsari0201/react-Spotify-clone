export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  current_playlist: null,
  playing: false,
  item: null,
  tracks: null,
  token: localStorage.getItem("x-token"),
};

const reducer = (state, action) => {
  console.log("Actin Type-->", action.type);

  switch (action.type) {
    case "SET_TOKEN":
      localStorage.setItem("x-token", action.token);
      return {
        ...state,
        token: action.token,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_CURRENT_PLAYLIST": {
      let currentPlaylist = null;
      state.playlists.items.forEach((playlist) => {
        if (playlist.id === action.id) {
          currentPlaylist = playlist;
        }
      });
      return {
        ...state,
        current_playlist: currentPlaylist,
      };
    }

    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };

    case "SET_TRACK":
      return {
        ...state,
        track: action.track,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
        tracks: action.discover_weekly.tracks,
      };

    case "ERROR":
    case "LOGOUT":
      localStorage.removeItem("x-token");
      return {
        user: null,
        playlists: [],
        discover_weekly: null,
        playing: false,
        item: null,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
