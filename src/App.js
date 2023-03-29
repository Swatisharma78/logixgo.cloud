import "./App.css";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Service from "./components/Pages/Service";
import Contacts from "./components/Pages/Contacts";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home/>
        <About/>
        <Service/>
        <Contacts/>
     
    
      </Router>
  </>
  );
}

export default App;
