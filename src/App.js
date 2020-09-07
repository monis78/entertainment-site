import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbare from './component/Header/Navbar';
import Home from './component/Home/Home';


function App() {
  return (
    <div className="App">
   
   <Navbare />
   <Home />

    </div>
  );
}

export default App;
