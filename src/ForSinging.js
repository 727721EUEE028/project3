
import React, { useState } from "react";

export default function ForSinging() {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className='BORN SINGER'>
   <form style={{textAlign:"center"}}>
   <h2>Add Your Video:</h2>
   <input type="file" onChange={handleChange} />
   <img src={file} />
  
    <h1 className='title'><b>Time to sing...</b></h1>
   
    <br></br>
    
    <h4><b> Try to make it within 20–45 seconds.<br></br> It shouldn't be a full song.<br></br>
    Make sure it highlights your vocal capability. ...<br></br>
    NEVER sing a song from the companies enemy.
    
    
    </b></h4>
    </form></div>
  );
}