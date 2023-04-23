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
import HostVanDetails from "./components/host/vans/hostVansDetails";
// child details component 
import Details from "./components/host/vans/details"
import Pricing from "./components/host/vans/pricing"
import Photos from "./components/host/vans/photos"

// css files 
import './App.scss';
import Host from "./components/host/host";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            {/* home page */}
            <Route index element={<Home />} />
            {/* host page */}
            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />} >
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
            {/* about page */}
            <Route path="about" element={<About />} />
            {/* vans page */}
            <Route path="vans" element={<Vans />} /> 
            <Route path="vans/:id" element={<VanDetails />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
