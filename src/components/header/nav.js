import { NavLink, Outlet } from "react-router-dom";

// style sheet 
import "./nav.styles.scss";

export default function Nav() {

    return(<>
        <nav className="nav-bar">
        <h2>
            <NavLink to="/"
            className={({isActive}) => isActive ? "is-active" : ""}
            >#VANLIFE</NavLink>
          </h2>
        <ul>
          <li>
            <NavLink to="/host"
            className={({isActive}) => isActive ? "is-active" : ""}
            >Host</NavLink>
          </li>
          <li>
            <NavLink to="/about"
            className={({isActive}) => isActive ? "is-active" : ""}
            >About</NavLink>
          </li>
          <li>
            <NavLink to="/vans"
            className={({isActive}) => isActive ? "is-active" : ""}
            >Vans</NavLink>
          </li>
        </ul>
      </nav>
      {/* this is where nested component will show depending on the url  */}
      <Outlet />
      </>
    );
}