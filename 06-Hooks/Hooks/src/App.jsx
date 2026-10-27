import React, { useState } from 'react'

const App = () => {
   
const [num, set] = useState(20);

function changenum(){
  set(2900)
}
  return (
    <div>
      <h1>The value of num is {num}</h1>
      <button onClick={  changenum  }>click me</button>
    </div>
  )
}

export default App
