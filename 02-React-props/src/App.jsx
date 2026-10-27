import React from 'react'  
import Profile from "./components/profile";

const App = () => {
  return (
    <div className="parent">
     
 
     <Profile user ='Ravi'age={21} img='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>  
     <Profile user ='Himanshu'age={23} img= 'https://media.istockphoto.com/id/2226363481/photo/confident-young-adult-engineer-posing-with-hard-hat.webp?a=1&b=1&s=612x612&w=0&k=20&c=nLPkLFCdNSFmGEEOGIFknmBMSel3uCZMpeC5QRV9HKc='/>  
     <Profile user ='Pawan'age={41} img= 'https://media.istockphoto.com/id/2248121848/photo/machine-learning-ai-and-big-data-concept-digital-wave-background-and-program-code-large.webp?a=1&b=1&s=612x612&w=0&k=20&c=3hK8lm4V8X0qYiybzJDCK0xetxOZO0zSOPJhFzaiFRU='/>  
     <Profile user ='Krishna'age={11} img='https://plus.unsplash.com/premium_photo-1687892170417-f9a11a402ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>  
     <Profile user ='Viaks'age={51}img='https://plus.unsplash.com/premium_photo-1682430553117-f1d0edb35a14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>  
     <Profile user ='Ankit'age={81} img='https://images.unsplash.com/photo-1758607512888-04e0aabb45ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>  
    
    </div>
  )
}

export default App
