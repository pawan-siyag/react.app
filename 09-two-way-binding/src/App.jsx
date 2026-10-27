import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('');
  
  const submit =(e) =>{
    e.preventDefault()
    console.log('waiting...' , title);
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e)
      }} > 
        <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App

