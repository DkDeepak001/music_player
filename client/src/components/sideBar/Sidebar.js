import React, { useState,useEffect } from 'react';
import './sidebar.css';
import playIcon from '../images/icons/play-button.png';
import dataJSON from '../home/player/dataSong';
import {useDispatch } from "react-redux";
import {changeSong} from '../feauters/reducer'

function Sidebar(props) {
  const dispatch = useDispatch();
  const [data ,setData] = useState();

  useEffect(() => {
    setData(dataJSON);
  })
  
  useEffect(() => {
    dispatch(changeSong(dataJSON[0]));
  },[])

  

  return (
    <div className='sidebar-container'>
      <div className='local-list'>
            {data? data.map((d, index) => 
            <>
              <div className='sidebar-song-container' onClick={() => dispatch(changeSong(dataJSON[index]))} >
                <div className='sidebar-song-img'>
                  <img src="https://yt3.ggpht.com/ytc/AMLnZu9-LgELbaGCR96t3I8DaYUOi2YPzwPcTkfooMWb3Q=s900-c-k-c0x00ffffff-no-rj"></img>
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