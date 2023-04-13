import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
    const {id} = useParams();
    const [van, setVan] = useState({});
    useEffect(() => {
        fetch(`/api/van/${id}`)
        .then(res => res.json())
        .then((data) => setVan(data))
    }, [])
    return(
        <div className="van-details">
            <button>click here to go back</button>
            <img src={van.img} alt="van" />
            <h2>{van.name}</h2>
            <p>{van.price}$/day</p>
            <p>{van.description}</p>
        </div>
    );
}

export default VanDetails;