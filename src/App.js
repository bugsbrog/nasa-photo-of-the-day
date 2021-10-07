import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY, KEY_CONNECT} from './constants'
import Header from './header'
import Title from './title'
import Footer from './footer'
import Content from './Content'

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
      <Title title={apiData.title}/>
      <p>
      <img src={apiData.url} alt='spacephoto'/>
      </p>
      <Header text={apiData.date}/>
      <Content text={apiData.explanation}/>
      <Footer title={apiData.copyright}/>
    </div>
  );
}

export default App;