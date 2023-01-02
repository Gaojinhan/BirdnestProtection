import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import InfoList from './components/List/InfoList';
import { useState, useEffect } from 'react';
import client from './services/axiosConfigurer';

function App() {

  const [violations, setviolations] = useState([])

useEffect(() => {
  const timer = setInterval(() => {
    client.get('/violations').then((response) => {
      setviolations(response.data);
    });
  }, 5000);
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
