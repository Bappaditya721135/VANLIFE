import { Link, Outlet } from "react-router-dom";

// style sheet 
import "./nav.styles.scss";

export default function Nav() {
    return(<>
        <nav className="nav-bar">
        <h2>
            <Link to="/">#VANLIFE</Link>
          </h2>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
      {/* this is where nested component will show depending on the url  */}
      <Outlet />
      </>
    );
}