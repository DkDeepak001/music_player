import React from 'react';
import './sidebar.css';
import playIcon from '../images/icons/play-button.png'

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='local-list'>
        <div className='sidebar-song-container'>
          <div className='sidebar-song-img'>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9-LgELbaGCR96t3I8DaYUOi2YPzwPcTkfooMWb3Q=s900-c-k-c0x00ffffff-no-rj"></img>
          </div>
          <div className='sidebar-song-detail'>
            <h3 className='sidebar-song-name'>Bad guy</h3>
            <h5 className='sidebar-song-artist'>Bille eilish</h5>
          </div>
          <div className='sidebar-song-control'>
            <button className='play-btn'><img src={playIcon} /></button>
          </div>
        </div>
        <div className='sidebar-song-container'>
          <div className='sidebar-song-img'>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9-LgELbaGCR96t3I8DaYUOi2YPzwPcTkfooMWb3Q=s900-c-k-c0x00ffffff-no-rj"></img>
          </div>
          <div className='sidebar-song-detail'>
            <h3 className='sidebar-song-name'>Bad guy</h3>
            <h5 className='sidebar-song-artist'>Bille eilish</h5>
          </div>
          <div className='sidebar-song-control'>
            <button className='play-btn'><img src={playIcon} /></button>
          </div>
        </div>
        <div className='sidebar-song-container'>
          <div className='sidebar-song-img'>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9-LgELbaGCR96t3I8DaYUOi2YPzwPcTkfooMWb3Q=s900-c-k-c0x00ffffff-no-rj"></img>
          </div>
          <div className='sidebar-song-detail'>
            <h3 className='sidebar-song-name'>Bad guy</h3>
            <h5 className='sidebar-song-artist'>Bille eilish</h5>
          </div>
          <div className='sidebar-song-control'>
            <button className='play-btn'><img src={playIcon} /></button>
          </div>
        </div>
      </div>
      <div className='online'></div>
    </div>
  )
}

export default Sidebar