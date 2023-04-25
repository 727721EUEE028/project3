import React, { useState } from "react";

export default function ForDancing() {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className='ForDancing'>
    <form style={{textAlign:"center"}}>
   <h1>Add Your Video:</h1>
   <h2>IT'S YOUR TIME TO SHINE</h2>
   <input type="file" onChange={handleChange} />
   <img src={file} />
    <h1 className='title'><b>ForDancing</b></h1>
   
    <br></br>
    <h4><b>Research the production. Research the company or production you are auditioning for. ...<br></br>
    Be well presented. This is really important so make the time to plan. ...<br></br>
    Pack light. Be minimal with your belongings. ...<br></br>
    Warm up. ...<br></br>
    Learn the steps. ...<br></br>
    Stay in place. ...<br></br>
    Thank the judges.
    
    </b></h4>
    </form></div>
  )
}