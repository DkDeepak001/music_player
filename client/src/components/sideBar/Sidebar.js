import React, { useState,useEffect,useRef } from 'react';
import './sidebar.css';
import playIcon from '../images/icons/play-button.png';
import dataJSON from '../home/player/dataSong';
import {useDispatch } from "react-redux";
import {changeSong} from '../feauters/reducer'
import gsap from 'gsap';

function Sidebar(props) {
  const sideBarContainer = useRef(null)
  const dispatch = useDispatch();
  const [data ,setData] = useState();

  useEffect(() => {
    setData(dataJSON);
    
  })
  
  useEffect(() => {
    if(props.songID){
      const id = (props.songID - 1)
      dispatch(changeSong(dataJSON[id]));
    }
  },[props.songID])
  useEffect(() => {
    // gsap.fromTo(sideBarContainer.current.children,{opacity:0,y:-25,scale:.9},{scale:1,opacity:1,y:0,duration:.5,stagger:.1})
  }, [])
  

  

  return (
    <div className='sidebar-container'>
      <div className='local-list' ref={sideBarContainer}>
            {data? data.map((d, index) => 
            <>
              <div className='sidebar-song-container' onClick={() => dispatch(changeSong(dataJSON[index]))} >
                <div className='sidebar-song-img'>
                  <img src={d.link}></img>
                </div>
                <div className='sidebar-song-detail'> 
                  <h3 className='sidebar-song-name'>{ d.name }</h3>
                  <h5 className='sidebar-song-artist'>{d.author}</h5>
                </div>
             
            </div>
            </>):""}
            
          
      </div>
      <div className='online'></div>
    </div>
  )
}

export default Sidebar