import './App.css';
import Button from './components/Button';
import PersonalCards from './components/PersonalCards';
// import { data } from './dataSamples/personalData';
import React, { useState, useEffect } from 'react';
import axios from "axios";

let count = 0;
const URL = "https://randomuser.me/api/?results=5";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.results);
    });
  }, []);

  console.log(data);

  const [showComponent, setShowComponent] = useState([]);
  const showPersonalCards = () =>{
    if (count === data.length) {
      setShowComponent([]);
      count = 0;
    } else{
      setShowComponent([...showComponent,data[count]]);
      count ++
      }
    }
  return (
    <div>
      {showComponent.map((item, index) => (
        <PersonalCards key={index} picture={item.picture.medium} firstName={item.name.first} secondName={item.name.last} email={item.email}></PersonalCards>
      ))}
      <Button onClick={showPersonalCards}></Button>
    </div>
  );
}

export default App;
