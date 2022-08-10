import React, { useState, useEffect } from 'react';
import './player.css';
import play from '../../images/icons/play-button.png';
import next from '../../images/icons/next-button.png';
import pause from '../../images/icons/video-pause-button.png';
import url  from '../../songs/Billie_Eilish_-_Bad_Guy.mp3';


function Player() {
    
    const [audio, setAudio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [time, setTime] = useState(Date.now());
    const [currentTime, setCurrentTime] = useState();
    const [fullTime, setFullTime] = useState();


    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },[playing]);

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        var seconds = parseInt(audio.currentTime % 60);
        var minutes = parseInt((audio.currentTime / 60) % 60);

        var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);

        function str_pad_left(string,pad,length) {
          return (new Array(length+1).join(pad)+string).slice(-length);
        }
        setCurrentTime(finalTime);
        setFullTime(str_pad_left(parseInt((audio.duration / 60) % 60),'0',2)+':'+str_pad_left(parseInt(audio.duration % 60),'0',2))
        const slider = document.getElementById("slider");
        slider.value = audio.currentTime ;
        return () => {
            clearInterval(interval);
          };
    });

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));

        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, []);
    
 
      const updateSlider = (e) => {
       const val = parseFloat(e.target.value);
        audio.currentTime = val;
      }

  return (
    <div className='player-container'>
        <div className='song-cover'>
            <img className='song-cover-img' src="https://www.rollingstone.com/wp-content/uploads/2020/01/BillyEilish.jpg"/>
        </div>
        <div className='controller'>
            <div className='controller-controls'>
                <img src={next} className='reverse'></img>
                <button onClick={toggle}>{playing ?  <img src={pause} ></img> : <img src={play} ></img>} </button>
                <img src={next}></img>
            </div>
            <div className='controller-slider'>
              
              <h4>{currentTime}</h4>
              <input type="range" min="0" max={parseFloat(audio.duration)}  onInput={updateSlider} onChange={updateSlider} className='slider' id="slider"/>
              <h4>{fullTime}</h4>
            </div>
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