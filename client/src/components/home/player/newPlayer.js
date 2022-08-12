import React, { useState, useEffect,useRef } from 'react';
import './player.css';
import play from '../../images/icons/play-button.png';
import next from '../../images/icons/next-button.png';
import pause from '../../images/icons/video-pause-button.png';
import Sidebar from '../../sideBar/Sidebar';
import {useSelector} from 'react-redux';
import {gsap} from "gsap";




function Player() {
  const songDetail = useSelector((state) => state.music.value);
  const [songId,setSogId] = useState(1);
  const [audio, setAudio] = useState(new Audio());
  const [playing, setPlaying] = useState();
  const [time, setTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState();
  const [fullTime, setFullTime] = useState();
  
  const sideContainer= useRef(null);
  const mainContainer = useRef(null);
  const playerContainer = useRef(null);


    useEffect(()=>{
      changeMusicAnim();
      setAudio(new Audio(songDetail.path));
      setSogId(songDetail.id);
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);

      
    },[songDetail])

    useEffect(()=>{
      gsap.fromTo(playerContainer.current.children[1].children[0].children[1], {opacity:0},{duration:.3,scale:1,ease:"ease-in" ,opacity:1});
      playing ? audio.play() :audio.pause();
    },[playing])

    

    useEffect(()=>{
      
        const interval = setInterval(() => setTime(Date.now()),1000);
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

        if(audio.currentTime === audio.duration ){
          setPlaying(false)
        }

        return () => {
            clearInterval(interval);
          };
    })
  
    
    const changeMusicAnim= ()=>{
      gsap.fromTo(playerContainer.current.children[0],{scale:0.5,opacity:0},{duration:.5,scale:1,ease:"ease-in" ,opacity:1});
      gsap.fromTo(playerContainer.current.children[1].children[0].children,{opacity:0,y:-50},{duration:1,y:0,ease:"ease-in" ,opacity:1,stagger: 0.1});
      gsap.fromTo(playerContainer.current.children[1].children[1], {opacity:0,scale:0},{duration:.5,scale:1,ease:"ease-in" ,opacity:1,stagger: .2,delay:.1});
      gsap.fromTo(playerContainer.current.children[2].children,{y:50,opacity:0},{duration:.8,y:0,ease:"ease-in" ,opacity:1 ,stagger: 0.1,delay:.2});
    }
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

      const playNext =() => {
        if(songId <= 8 && songId >= 1){ 
          changeMusicAnim();
          setSogId(songId + 1 );
        }
      }
      
      const playPrev =() => {
        if(songId <= 9 && songId > 1 ){
          changeMusicAnim();
          setSogId(songId - 1 );
       }
      }

      function toggle(){
        setPlaying(!playing);
        console.log(process.env.CLIENT_ID);
      }


      return (
        <div ref={mainContainer} className='main-container-splitup'>
        <Sidebar  sideBar songID={songId}/>
        <div ref={playerContainer} className='player-container'>
        
        <div className='song-cover'>
            <img className='song-cover-img' src={songDetail.link}/>
        </div>
        <div className='controller'>
            <div className='controller-controls'>
                <img src={next} className='reverse' onClick={playPrev}></img>
                <div onClick={toggle}>{  playing  ?  <img src={pause} ></img> : <img src={play} ></img>} </div>
                <img src={next} onClick={playNext}></img>
            </div>
            <div className='controller-slider'>
              
              <h4>{currentTime}</h4>
              <input type="range" min="0" max={parseFloat(audio.duration)}  onInput={updateSlider} onChange={updateSlider} className='slider' id="slider"/>
              <h4>{fullTime}</h4>
            </div>
        </div>
        <div className='song-details'>
            <div className='song-tittle'>
                <h1>{songDetail.name}</h1>
            </div>
            <div className='song-authore'>
                <h3>{songDetail.author}</h3>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Player