import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";


// style sheet 
import "./vanDetails.styles.scss";

const VanDetails = () => {
    // getting the van id from the url 
    const {id} = useParams();
    const [van, setVan] = useState({});
    useEffect(() => {
        fetch(`/api/van/${id}`)
        .then(res => res.json())
        .then((data) => setVan(data))
    }, [id])
    return(
        <div className="van-details-page">
            <Link to=".." relative="path" className="go-back-btn"><AiOutlineArrowLeft className="icon" /> click here to go back</Link>
            <div className="van-details">
                <img src={van.img} alt="van" />
                <div className="van-details-van-data">
                <span className="van-category">{van.category}</span>
                <h2>{van.name}</h2>
                <p className="van-details-price"><span>${van.price}</span>/day</p>
                <p className="van-details-description">{van.description}</p>
                <button>rent this van</button>
                </div>
            </div>
        </div>
    );
}

export default VanDetails;