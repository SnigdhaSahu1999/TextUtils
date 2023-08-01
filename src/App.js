import './App.css';
// the above import is for css file
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
// we have created a Navbar file inside components folder

//import About from './components/About';
import React, {useState} from 'react';
//import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode, setMode]  =  useState('light'); 

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
        {/* We send the values to the Navbar() of Navbar.js by "props" parameter*/}
        {/* <Navbar></Navbar> */}
      {/*<Navbar title="TextUtils" aboutText="About TextUtils"></Navbar>*/}

      
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3" >
          {/* <Routes>
            <Route exact path="/about" element={<About/>} />
          </Routes>
          <Routes>
            <Route path="/" element={ <TextForm heading="Enter the text to analyze below" mode={mode}/> }/>
          </Routes> */}
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
      </div>
      {/* </BrowserRouter> */}

      {/*<div className="container my-3">
        <About/>
      </div>*/}
    </>

  );
}

export default App;
