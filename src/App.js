import React, {useState, useEffect} from 'react'
import './App.css';

import axios from 'axios'
import NasaCard from './components/NasaCard'

function App() {

  const [nasaState, setNasaState] = useState({})

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => setNasaState(res.data))
      .catch(err => console.log(err));
  }, [setNasaState]);


  return (
    <>
    <NasaCard nasaState={nasaState}/>
    </>
  );
}

export default App;
