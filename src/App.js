import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


// components 
import Home from "./components/home/home";
import About from "./components/about/about";
import Vans from "./components/vans/van";
import Footer from "./components/footer/footer";
import VanDetails from "./components/vans/van/van-details/vanDetails";
import Nav from "./components/header/nav";

// host child component 
import Dashboard from "./components/host/dashboard/dashboard";
import Income from "./components/host/income/income";
import Reviews from "./components/host/reviews/reviews";
import HostVans from "./components/host/vans/vans";


// css files 
import './App.scss';
import Host from "./components/host/host";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} /> 
            <Route path="van/:id" element={<VanDetails />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
