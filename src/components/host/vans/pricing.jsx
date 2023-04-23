import { useOutletContext } from "react-router-dom";

export default function Pricing() {
    const van = useOutletContext()
    return(
        <h5>${van.price}/day</h5>
    );
}