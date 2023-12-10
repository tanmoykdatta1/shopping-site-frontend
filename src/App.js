
import Navbar from "./Components/Navbar";
import "./styles/Global.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/Shop";
import Profile from "./pages/profile";


function App() {
 
  return (
       <div>
     <Navbar/>
     <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

      </main>
    </div>
  );
};

export default App;
