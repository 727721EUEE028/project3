import React from 'react'
import About from './about'
import { Route,Routes ,Link} from 'react-router-dom'
import ForSinging from './ForSinging'
import Contact from './contact'
import Login from './login'

import ForDancing from './ForDancing'
import NowAvailable from './NowAvailable'


export default function Home() {
  return (
    <div> 
   
    <div className='heading'>
    <marquee font-size="5000px" width="100%" direction="right" scrollamount="17" behaviour="scroll" height="100px" bgcolor="pink"><h1>AUDITION ME</h1></marquee>
    <marquee direction="down" width="250" height="200"><h1>WE WANT YOU</h1></marquee>
    <form style={{textAlign:"center"}} >
    <h1>The world needs your music in it...
    </h1>
    <br></br>
   
    <Link to="/ForSinging"><button className="b b5">ForSinging</button></Link>
    <Link to="/ForDancing"><button className='b b5'>ForDancing</button></Link>
    <Link to="/contact"><button className='b b5'>Contact</button></Link>
    <Link to="/about"><button className='b b5'>About</button></Link>
    <Link to="/login"><button className='b b5'>Login</button></Link>
    <Link to="/NowAvailable"><button className='b b5'>NowAvailable</button></Link>
    <br></br><br></br>
    <hr></hr>
    </form>
    </div>
    <Routes>
   <Route path ='/ForSinging' element={<ForSinging/>} />
   <Route path ='/contact' element={<Contact/>} />
   <Route path ='/login' element={<Login/>} />
   <Route path ='/ForDancing' element={<ForDancing/>} />
   <Route path ='/about' element={<About/>} />
   <Route path ='/NowAvailable' element={<NowAvailable/>} />
    </Routes>
    </div>
  
  )
}