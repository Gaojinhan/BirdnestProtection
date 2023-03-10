import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import InfoList from './components/List/InfoList';
import { useState, useEffect } from 'react';
import client from './services/axiosConfigurer';
import axios from 'axios';

function App() {

  const [violations, setviolations] = useState([])

useEffect(() => {
  
  client.get('/violations').then((response) => {
    setviolations(response.data);
  });

  const timer = setInterval(async() => {
    await axios.get(
      "https://birdnestprotectionapi.onrender.com/api/violations"
    ).then((response) => {
      setviolations(response.data);
    });
  }, 3000);
  return () => clearInterval(timer);
}, []);


  return (
    <div className="App">
      <Header 
        title={"Violations Tracker"}
      />
      {violations.length > 0 ? (
        <InfoList 
        violations={violations}
      />
      ) : (
        'No violations at the moment'
      )}
      
    </div>
  );
}

export default App;
