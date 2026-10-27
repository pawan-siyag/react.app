import React, { useState } from 'react'


const App = () => {

    const [title, settitle] = useState('');
    const [details, setdetails] = useState('');
    const [task, settask] = useState([]);

 
       const submithandler= (e) => {

      const copyTask = [...task]
          
      
      
      e.preventDefault();
      
      copyTask.push({title, details});
      
      settask(copyTask)
      console.log(copyTask);
    settitle('')
     setdetails('')
        
  }

  const deletebtn = (idx) =>{
     
    const copyTask = [...task];
    copyTask.splice(idx , 1)
    settask(copyTask)
    
  }

  return (
    <div className=" lg:flex overflow-auto  h-screen bg-black text-white ">
      <form
      onSubmit={submithandler}
        className=" flex-col gap-4 lg:w-1/2 flex text-xl h-screen font-bold  p-5 "
      >
        <h1>Add Notes</h1>
        <input
          className="px-4 rounded border-2 border-white outline-none h-20"
          type="text"
          placeholder="Notes Heading"
          value={title}
          onChange={(e) => {
               settitle(e.target.value)
          }}
          
        />
        <textarea
          className=" rounded border-2 h-52 px-3 outline-none border-white"
          type="text"
          placeholder="Add details"
          value={details}
          onChange={(e) =>{
            setdetails(e.target.value)
          }}
        
           
          
        />
        <button className="rounded active:scale-89 w-full bg-white text-black">Add Note</button>
      </form>

      <div className="lg:w-1/2 lg:border-l/2 p-5 h-full m-5 w-1/2">
        <h1 className="font-bold">Recent Notes</h1>
        <div className="flex flex-wrap overflow-auto gap-5 h-full mt-6 ">
         {task.map(function(elem , idx){
          return (
            <div
              className='h-52 relative w-40 flex flex-col  p-4 bg-cover rounded-xl bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF739z4xHNsg_KRIlzZlY01DaomN8-XxIb2_A8251lg&s=10")] '
              key={idx}
            >
              <div>
                <h3 className="text-red-600 text-xl px-4 font-bold leading-tight">
                  {elem.title}
                </h3>
                <p className="text-[#6366F1] font-medium leading-tight ">
                  {elem.details}
                </p>
                
              </div>
              <button onClick={deletebtn} key={idx} className='absolute items-start top-43 active:scale-95 left-12  bg-red-400 rounded font-bold text-xs px-3 py-1.5'>Delete</button>
            </div>
          );
         })}
      </div>
    </div>
    </div>
  );
}


export default App
