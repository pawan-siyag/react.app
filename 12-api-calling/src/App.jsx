import React from "react";

const App = () => {
  const getdata = async () => {
    const response = await fetch("https://catfact.ninja/facts");
    const data = await response.json();

    
console.log(data.data);
  };

  return (
    <div>
      {" "}
      <button onClick={getdata}>Get Data</button>{" "}
    </div>
  );
};

export default App;
