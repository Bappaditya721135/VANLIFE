import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// style sheet 
import "./vanDetails.styles.scss";

const VanDetails = () => {
    const {id} = useParams();
    const [van, setVan] = useState({});
    useEffect(() => {
        fetch(`/api/van/${id}`)
        .then(res => res.json())
        .then((data) => setVan(data))
    }, [])
    return(
        <div className="van-details-page">
            <button className="go-back-btn">click here to go back</button>
                <img src={van.img} alt="van" />
            <div className="van-details">
                <span className="van-category">{van.category}</span>
                <h2>{van.name}</h2>
                <p className="van-details-price"><span>${van.price}</span>/day</p>
                <p className="van-details-description">{van.description}</p>
                <button>rent this van</button>
            </div>
        </div>
    );
}

export default VanDetails;