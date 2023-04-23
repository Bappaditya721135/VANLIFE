import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
// style sheet 
import "./vans.styles.scss";

export default function HostVans() {
    const [vans, setVans] = useState([])
    // getting the data for host id 123
    useEffect(() => {
        fetch("/api/vans/123")
        .then(res => res.json())
        .then(data => setVans(data))
        .catch(err => console.error(err))
    }, [])


    return(
        <div className="host-vans">
            <h2>Your listed vans</h2>
            <div className="listed-vans">
                {vans.length> 0 ? vans.map(van => {
                    return ( <div key={van.id}>
                        <Link to={`${van.id}`}>
                        <img src={van.img} className="hosted-van-img" />
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