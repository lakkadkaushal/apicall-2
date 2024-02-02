import './App.css';
import React, { useState } from 'react';

function App() {

  const [Bdate, setBdate] = useState('');
  const [Tdate, setTdate] = useState('');
  const [sec, setsec] = useState('');
  const [mini, setmini] = useState('');
  const [hou, sethou] = useState('');
  const [day, setday] = useState('');
  const [wee, setwee] = useState('');
  const [mon, setmon] = useState('');
  const [yer, setyer] = useState('');
  
  const getage = () => {
    const todayDate = new Date(Tdate);
    
    const BirthDate = new Date(Bdate);
    const miliSec = todayDate - BirthDate;
    const second = miliSec / 1000;
    const mintus = second / 60;
    const hours = mintus / 60;
    const day = hours / 24;
    const week = Math.floor(day / 7);
    const month = (todayDate.getMonth() - BirthDate.getMonth()) + (12 * (todayDate.getFullYear() - BirthDate.getFullYear()));
    const year = Math.floor(month / 12);

    setsec(second)
    setmini(mintus)
    sethou(hours)
    setday(day) 
    setwee(week)
    setmon(month)
    setyer(year)
  }
  

  
  return (
    <>
      <div className="data">
        <h1>Enter Date of Birth Day :</h1>
        <input type="date" onChange={(e) => setBdate(e.target.value)} />
        <h1>Enter ToDay Date :</h1>
        <input type="date" onChange={(e) => setTdate(e.target.value)} />
        <br></br>
        <button onClick={getage}>CLICK TO GET AGE</button>
      </div>
      <div className="data2">
        <h1>YEAR :{yer}</h1>
        <h1>MONTHS : {mon}</h1>
        <h1>WEEKS :{wee} </h1>
        <h1>DAY :{day} </h1>
        <h1>HOURS :{hou}</h1>
        <h1>MINUTES : {mini}</h1>
        <h1>SECONDS :{sec} </h1>
      </div>
    </>
  );
}

export default App;
