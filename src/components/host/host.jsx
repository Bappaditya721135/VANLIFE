import { Outlet, Link } from "react-router-dom";

// style sheet 
import "./host.styles.scss";

export default function Host() {
    return(
        <div className="host-page">
        <ul className="host-nested-links">
            <li>
                <Link to="/host">Dashboard</Link>
            </li>
            <li>
                <Link to="/host/income">Income</Link>
            </li>
            <li>
                <Link to="/host/reviews">Reviews</Link>
            </li>
            <li>
                <Link to="/host/vans">Vans</Link>
            </li>
        </ul>
        <Outlet />
        </div>
    );
}