import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState(null);

  useEffect(()=>{
    axios.get("http://localhost:5000/response")
    .then(response => response.data)
    .then(setData)
    .catch(console.error);
  }, [])

  

  return(
    <>
      <div className="resultArea">{data}</div>
    </>
  );
  
}

export default App
