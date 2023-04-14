import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


// components 
import Home from "./components/home/home";
import About from "./components/about/about";
import Vans from "./components/vans/van";
import Footer from "./components/footer/footer";
import VanDetails from "./components/vans/van/van-details/vanDetails";
import Nav from "./components/header/nav";


// css files 
import './App.scss';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} /> 
            <Route path="/van/:id" element={<VanDetails />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
