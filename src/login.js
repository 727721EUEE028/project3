import React from 'react'

export default function Login() {
 
  return (
    <div >
    <form style={{textAlign:"center"}} >
    
    
    <h1 className='title'>
    <b>Login:</b></h1>

    <br></br>
    
     <h2><b>Name:</b><input type='text'></input></h2><br></br>
     <br></br>
     <h2><b>place:</b>{" "}{"  "}<input type='Area'></input></h2><br></br><br></br>
    <h2><b>Date of Birth:</b>{" "}{" "}{" "}<input type='date'></input></h2><br></br>  
    <br>
    </br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
     <h2><b>Which one    </b>sing<input type='radio' className='radioInput'></input>Dance<input className='inputRadio' type='radio'></input></h2><br></br><br></br>
    
     <button>SUBMIT</button>
    </form>
    
    </div>
  )
}