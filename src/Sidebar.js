import React from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {
  return (
    <div className="sidebar">
        <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo"/>
        <SidebarOptions Icon={HomeIcon} title="Home"/>
        <SidebarOptions Icon={SearchIcon} title="Search"/>
        <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>
        
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>

        <SidebarOptions title="Hip Hop"/>
        <SidebarOptions title="Rock"/>
        <SidebarOptions title="RnB"/>
    </div>
  )
}

export default Sidebar