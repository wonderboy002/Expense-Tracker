import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Dashboard } from './Pages/Dashboard';
import { Auth } from './Pages/Auth';

function App() {


  return (
    <>
      <Router>
      <div className="appContainer">
         <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/auth" element={<Auth/>}/>
         </Routes>
       </div>
      </Router>
    </>
  )
}

export default App
