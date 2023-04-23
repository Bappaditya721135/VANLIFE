import { useOutletContext } from "react-router-dom";

// style sheet 
import "./hostVanDetails.styles.scss"

export default function Details() {
    const van = useOutletContext();
    return(
        <div className="details">{van.description}</div>
    );
}