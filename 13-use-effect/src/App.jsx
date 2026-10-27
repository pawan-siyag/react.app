import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  useEffect (function () {
         console.log('use-effect is runing');
         
  },[a])

  const changeA = () => {
    setA(a + 1)
  }
  const changeB = () => {
    setB(b - 1)
  }

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

     <button onClick={changeA}>click me!!</button>
     <button onClick={changeB}>click me!!</button>

    </div>
  )
}

export default App
