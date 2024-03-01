import './App.css';
import React, { useState } from 'react';
import Card from './components/Card';
import Astro from './components/Astro';
import { useNavigate } from "react-router-dom"



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


  const [a, setA] = useState("");//aname

  const Navigate = useNavigate();

  function handleInputChange(event) {
    setA(event.target.value);
  }


  const API_URL = "https://sreeventh.github.io/api_list/astro.json";


  async function getAstroDeets() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // console.log(data);
      // console.log(ad);
      // console.log(ad[a]);
      // const sd = ad[a];
      // setN(sd["nationality"]);
      // setDob(sd["date_of_birth"])
      // setM(sd["missions"][0]["mission_date"]);
      // setSx(sd["missions"][0]["spacecraft"])
      Navigate("/abox", { state: { a: a, data: data } });

    } catch (error) {
      throw new Error("Not able to fetch!");
    }
  }


  function handleKeyPress(event) {
    if (event.key === "Enter") {
      getAstroDeets();
    }
  }





  return (
    <div>
      <h1 className='anta-regular' id='heading'>NASA Space Explorer</h1>
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
      <Astro
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        Astroname={a}
      />
    </div>
  );
}

export default App;
