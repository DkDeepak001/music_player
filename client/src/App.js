import React from 'react';
import './App.css';
import Sidebar from './components/sideBar/Sidebar';
import Home from './components/home/Home';

function App() {
  return (
    <div className='main-container'>
        <div className='main-container-splitup'>
          <Sidebar />
          <Home />
        </div>
        
    </div>
  )
}

export default App