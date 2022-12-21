import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import InfoList from './components/List/InfoList';
import { useState } from 'react';

function App() {

  const [violations, setviolations] = useState([
    {
        firstName: "Dexter",
        lastName:"Metz",
        phoneNumber:"+210635740914",
        createdDt:"2022-05-14T19:40:09.417Z",
        email:"dexter.metz@example.com"
    },

    {
        firstName: "Darlene",
        lastName:"Langosh",
        phoneNumber:"+210569539090",
        createdDt:"2022-08-23T22:32:06.683Z",
        email:"darlene.langosh@example.com"
    }
])


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
