import React, {useState, useEffect} from 'react'
import './App.css';

import axios from 'axios'
import NasaCard from './components/NasaCard'

// code split nasaCard to provide loading state or some other method

function App() {

  //using an empty array at state to provide the render an initial value and avoid 'undefined.map is not a function'. Effects run after the render
  const [nasaState, setNasaState] = useState([])

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=hzQ1VrvM5cSvH6REAE8wiGe3Q119EPu6YWyAharL&start_date=2021-09-01')
      .then(res => setNasaState(res.data))
      .catch(err => console.log(err));
  }, [setNasaState]);


  return (
    <>
      {nasaState.map((item) => {
        return (
          <NasaCard key={item.date} hdurl={item.hdurl} title={item.title} date={item.date} explanation={item.explanation} />
        )
      })}
    </>
  );
}

export default App;
