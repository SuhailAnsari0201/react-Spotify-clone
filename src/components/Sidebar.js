import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../DataLayer";
const Sidebar = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption
          spotify={spotify}
          key={playlist.name}
          title={playlist.name}
          id={playlist.id}
        />
      ))}
    </div>
  );
};

export default Sidebar;
//3hr 00min playlist name (not)showing ....
