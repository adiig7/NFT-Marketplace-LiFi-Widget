import './App.css';
import Navbar from './components/Navbar.js';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import NFTPage from './components/NFTpage';
import ReactDOM from "react-dom/client";
import LiFiWidget from './components/LiFiWidget';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/*" element={<Marketplace />}/>
          <Route path="/nftPage/" element={<NFTPage />} />        
            <Route path="/swap/*" element={<LiFiWidget />} />
          <Route path="/profile" element={<Profile />}/>
        </Routes>
    </div>
  );
}

export default App;
