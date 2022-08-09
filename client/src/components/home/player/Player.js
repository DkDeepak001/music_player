import React from 'react';
import './player.css';
import play from '../../images/icons/play-button.png'
import next from '../../images/icons/next-button.png'

function Player() {
  return (
    <div className='player-container'>
        <div className='song-cover'>
            <img className='song-cover-img' src="https://www.rollingstone.com/wp-content/uploads/2020/01/BillyEilish.jpg"/>
        </div>
        <div className='controller'>
            <div className='controller-controls'>
                <img src={next} className='reverse'></img>
                <img src={play}></img>
                <img src={next}></img>
            </div>
            <div className='controller-slider'></div>
        </div>
        <div className='song-details'>
            <div className='song-tittle'>
                <h1>Bad Guy</h1>
            </div>
            <div className='song-authore'>
                <h3>Bille eilish</h3>
            </div>
        </div>
    </div>
  )
}

export default Player