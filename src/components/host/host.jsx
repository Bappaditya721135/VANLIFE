import { Outlet, NavLink } from "react-router-dom";

// style sheet 
import "./host.styles.scss";

export default function Host() {
    return(
        <div className="host-page">
        <ul className="host-nested-links">
            <li>
                <NavLink to="/host"
                className={({isActive}) => isActive ? "is-active" : ""}
                >Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/host/income"
                className={({isActive}) => isActive ? "is-active" : ""}
                >Income</NavLink>
            </li>
            <li>
                <NavLink to="/host/reviews"
                className={({isActive}) => isActive ? "is-active" : ""}
                >Reviews</NavLink>
            </li>
            <li>
                <NavLink to="/host/vans"
                className={({isActive}) => isActive ? "is-active" : ""}
                >Vans</NavLink>
            </li>
        </ul>
        <Outlet />
        </div>
    );
}