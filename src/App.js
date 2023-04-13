import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


// components 
import Home from "./components/home/home";
import About from "./components/home/about/about"
import Van from "./components/home/van/van";
import Footer from "./components/footer/footer";
import VanDetails from "./components/home/van/van-details/vanDetails";


// css files 
import './App.scss';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
      <nav className="nav-bar">
        <h2>
            <Link to="/">#VANLIFE</Link>
          </h2>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/van">Vans</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/van" element={<Van />} /> 
          <Route path="/van/:id" element={<VanDetails />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
