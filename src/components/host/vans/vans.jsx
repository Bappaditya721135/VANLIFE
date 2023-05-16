import {Link, useLoaderData} from "react-router-dom";


// getting the fetch function for the host 
import {getHostVans} from "../../../fetchApi"

// style sheet 
import "./vans.styles.scss";

// loader function for this component 
export const hostVansLoader = () => {
    return getHostVans();
}

export default function HostVans() {

    // getting the data from the loader function 
    const vans = useLoaderData()

    return(
        <div className="host-vans">
            <h2>Your listed vans</h2>
            <div className="listed-vans">
                {vans.length> 0 ? vans.map(van => {
                    return ( <div key={van.id}>
                        <Link to={`${van.id}`}>
                        <img src={van.img} className="hosted-van-img" alt="van-img" />
                        <div className="van-data">
                        <p className="van-name">{van.name}</p>
                        <p className="van-price">${van.price}/day</p>
                        </div>
                        </Link>
                    </div>)
                }) : <h2>Loading...</h2>}

            </div>
        </div>
    );
}