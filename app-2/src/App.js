import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

import './App.css';


function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        setList(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      {list.map((elem, i) => {
        return <ListItem name={ elem.name } key={ i } />
      })}
    </div>
  );
}

export default App;
