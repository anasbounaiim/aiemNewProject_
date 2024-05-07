import Home from "./components/home/Home"
import Team from "./components/Teams";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import React, { useState  } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoadingSpinner from "./components/Loading";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading period
  }, []);

  return (
    <>
    
    

      {isLoading ? (
        <LoadingSpinner/>
      ) : (
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/team" exact element={<Team/>} />
        </Routes>
        <Footer/>
        </Router>
        
        
        
      )}
      
    </>
  )
}

export default App
