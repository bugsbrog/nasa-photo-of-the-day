import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY, KEY_CONNECT} from './constants'

function App() {
  const [apiData, setApiData] = useState([])
  const [spaceImage, setSpaceImage] = useState(null);

useEffect(() => {

  axios.get(`${BASE_URL}${KEY_CONNECT}${API_KEY}`)
  .then(res => {
      return setApiData(res.data)

  })
  .catch(err => {
    console.error(err)
  })
}, [])

console.log(apiData);

  return (
    <div className="App">
      <h1> Nasa Photo of the Day</h1>
      <h3> {apiData.title} </h3>
      <img src={apiData.url} alt='spacephoto'/>
      <p> {apiData.explanation}</p>
      <p> {apiData.date}</p>
      <p> {apiData.copyright} </p>
    </div>
  );
}

export default App;