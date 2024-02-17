import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spacecrafts from "./Components/Spacecrafts";
import Colonies from "./Components/Colonies";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar visi="" /><Hero /><Footer /></>}/>
          <Route path="/spacecrafts" element={<><Navbar visi=""/><Spacecrafts/><Footer /></>}/>
          <Route path="/colonies" element={<><Navbar visi="" /><Colonies/><Footer /></>}/>
          <Route path="/exploration" element={<><Navbar visi="" /><Footer /></>}/>
          <Route path="/culture" element={<><Navbar visi="" /><Footer /></>}/>
          <Route path="/science" element={<><Navbar visi="" /><Footer /></>}/>
          <Route path="/history" element={<><Navbar visi="" /><Footer /></>}/>
          <Route path="/login" element={<><Navbar visi="hide" /><Login/></>}/>
          <Route path="/signup" element={<><Navbar visi="hide" /><Login/></>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
