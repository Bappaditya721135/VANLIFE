import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";


// components 
import Home from "./components/home/home";
import About from "./components/about/about";
import Vans, {loader as vansLoader} from "./components/vans/van";
import VanDetails, {vanDetailsLoader} from "./components/vans/van/van-details/vanDetails";
import Nav from "./components/header/nav";

// host child component 
import Dashboard from "./components/host/dashboard/dashboard";
import Income from "./components/host/income/income";
import Reviews from "./components/host/reviews/reviews";
import HostVans, {hostVansLoader} from "./components/host/vans/vans";
import HostVanDetails, {hostVanDetailsLoader} from "./components/host/vans/hostVansDetails";
// child details component 
import Details from "./components/host/vans/details"
import Pricing from "./components/host/vans/pricing"
import Photos from "./components/host/vans/photos"

// css files 
import './App.scss';

import Host from "./components/host/host";
// this error page is for some unknow url 
import ErrorPage from "./components/error/errorPage";

// this error page when something went wrong in fetching data 
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Nav />}>
            {/* home page */}
            <Route index element={<Home />} />
            {/* host page */}
            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
              <Route path="vans/:id" element={<HostVanDetails />} loader={hostVanDetailsLoader} errorElement={<Error />} >
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
            {/* about page */}
            <Route path="about" element={<About />} />
            {/* vans page */}
            <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} /> 
            <Route path="vans/:id" element={<VanDetails />} loader={vanDetailsLoader} errorElement={<Error />} /> 
            {/* the * represents that this is random url  */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
  ))
  return (
    <div className="main-container">
      <RouterProvider router={router} />
      </div>
  );
}

export default App;
