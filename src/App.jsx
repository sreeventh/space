import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';



function App() {

  // const [bgimg, setBgimg] = useState("");

  // useEffect(() => {
  //   async function fetchBackgroundImage() {
  //     try {
  //       const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=0CUMhfSaDToILcxkT6GPg5SQ6GHnPPJdSh5DBMI6");
  //       const bgData = await response.json();
  //       setBgimg(bgData.url);
  //     } catch (error) {
  //       console.error('Error fetching background image:', error);
  //     }
  //   }

  //   fetchBackgroundImage();
  // }, []);

  // useEffect(() => {
  //   document.body.style.backgroundImage = `url('${bgimg}')`;
  //   document.body.style.backgroundSize = 'cover';
  //   document.body.style.backgroundRepeat = 'no-repeat';
  //   document.body.style.backgroundAttachment = 'fixed';
  // }, [bgimg]);




  return (
    <div>
      <h1 className='anta-regular' id='heading'>Space Explorer</h1>
      <div className='container'>
        <Card
          title="APOD"
          desc="Astronomy Picture of the Day"
          butt="Learn more"
          red="/apod"
        />
        <Card
          title="Asteroids"
          desc="Deep Dive"
          butt="Analyse"
          red="/asteroid"
        />
        <Card
          title="TECH"
          desc="Latest Patents & Software "
          butt="Discover"
        />
      </div>
    </div>
  );
}

export default App;
