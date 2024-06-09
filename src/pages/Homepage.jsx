import React from 'react';
import "./Homepage.css";
import Sidenav from './navigation/Sidenav';
import Mid from './timeline/Mid';


function Homepage() {
  return (
    <div className='homepage'>
        <div className='homepage__nav'>
        <Sidenav/>
        </div>

        <div className='homepage__timeline'>
        <Mid/>
        </div>
        </div>
  )
}

export default Homepage