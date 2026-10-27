import React, { useState } from 'react'

const App = () => {

const [Num, setNum] = useState({user: 'sarthak' , age:21})
 
 const update  =()=> {
       const sum= {...Num};
       sum.user = 'pawan'
       setNum(sum)
 }
  return (
    <div>
      <h1>{Num.user} {Num.age}</h1>
      <button onClick={update}>click me!</button>
    </div>
  )
}   
   
export default App
