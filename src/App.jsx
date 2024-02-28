import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [bgimg, setBgimg] = useState("");

  useEffect(() => {
    async function fetchBackgroundImage() {
      try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        const bgData = await response.json();
        setBgimg(bgData.url);
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    }

    fetchBackgroundImage();
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${bgimg}')`;
    document.body.style.backgroundSize = 'cover'; // Optionally adjust background size
    document.body.style.backgroundRepeat = 'no-repeat'; // Optionally adjust background repeat
    document.body.style.backgroundAttachment = 'fixed'; // Optionally adjust background attachment
  }, [bgimg]);



  return (
    <div>
      <h1 className='anta-regular' id='heading-space'>Space Explorer</h1>
    </div>
  );
}

export default App;
