import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



const App = () => {
  const [data, setdata] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async() => {
    
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`,
    );
    
    
    setdata(response.data);
    console.log(response.data);
    console.log(index);
    

  };
  function perv(){
    if(index>1){
      setIndex(index - 1);
    }
  }
  function Next(){
    setIndex(index+1)
  }
  useEffect(function(){
    getData()
  }, [index])

  let printuser = <h2 className="h-screen absolute top-1/2 left-1/2  bg-black text-gray-400">Data is loading...</h2>
    if (data.length > 0) {
      printuser = (
        <div className="flex flex-wrap gap-6 h-full px-4 py-4 m-5">
            {data.map((elem) => {
          
              return (
                <div key={elem.id} className="">
                  <a href={elem.url}>
                    <img
                      src={elem.download_url}
                      className=" object-cover h-44 w-44 rounded"
                    />
                  </a>
                  <h3>{elem.author}</h3>
                </div>
              );
        
            })}
        </div>
      );
    }
    
    return (
      <div className="bg-black min-h-screen overflow-auto text-white w-full">
        <div className="flex flex-wrap ">{printuser}</div>

        <div className="flex justify-center p-4 gap-5 items-center">
          <button
            onClick={perv}
            disabled={index === 1}
            className="bg-amber-400 disabled:opacity-40 active:scale-95 py-4 px-6 rounded "
          >
            Prev
          </button>
          <h1 className="bg-amber-400 py-4 px-6 rounded">{index}</h1>
          <button
            onClick={Next}
            className=" bg-amber-400  py-4 active:scale-95 px-6 rounded "
          >
            Next
          </button>
        </div>
      </div>
    );
};

export default App;
