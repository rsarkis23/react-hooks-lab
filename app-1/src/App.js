import React, { useState } from 'react'
import AddTodo from './AddTodo'

import './App.css';

function App() {
  return (
    <div className="App">
     <AddTodo addTodo={addTodo}/>
      
    </div>
  );
}

export default App;
