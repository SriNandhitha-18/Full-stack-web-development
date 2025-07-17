import React from "react";
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
//npm install react-router-dom
import {Routes, Route} from 'react-router-dom'
import Navbar from './nav.jsx';
function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<p>Main Page</p>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={<p>Page not found</p>}/>
    </Routes>
    </>
  )
}
export default App;
/* import Mycomponent from "./hooks.jsx";  
 */
/* import Mycomponent1 from "./useeffect-hook.jsx";
function App(){
  return(
    <div>
      <Mycomponent1 />
    </div>
  );
}

export default App; */

/* import Student from './student.jsx'; 
import Student  from "./student.jsx";
import RenderList from "./renderlist.jsx"; 
import MouseOutEvent from "events.jsx"; */

/* function App(){
  return(
    <div>
      <button onMouseLeave={handleMouseLeave}>Hover out Me</button>
    </div>
  );
}
export default App;   */

/* function App() {
  return (
    <div>
    </div>
  );
  const students={
    { name: "John" ;age: 20; isStudent: true}
    { name: "Smith" ;age: 22; isStudent: false}
    { name: "Johnson" ;age: 19; isStudent: true}
    { name: "Bob" ;age: 21; isStudent: false}
  }
}
export default App; */



/* function App(){
  return(
    <div>
      <Greeting isloggedin={true} user={"John"}/>
      <Greeting isloggedin={false} user={"Jane"}/>
      <Greeting isloggedin={false} user={"Jimmy"}/> 
    </div>
  );
}
export default App;  */

/* function App(){
  return(
    <div>
      <Student name="John" age={20} isStudent={true}/>
      <Student name="Jane" age={22} isStudent={false}/>
      <Student name="Alice" age={19} isStudent={true}/>
    </div>
  );
}
export default App; */

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> {/* fragment // }
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */