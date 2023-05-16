import { Link, useLocation, useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";


// import the fetch function 
import { loadVans } from "../../../../fetchApi";



// style sheet 
import "./vanDetails.styles.scss";


// loader function for this component 
export const vanDetailsLoader = ({params}) => {
    const {id} = params;
    return loadVans(id);
}

const VanDetails = () => {

    // getting the data from the loader function 
    const van = useLoaderData()
    

    // getting the like state data filtered datas
    const location = useLocation();

    // checking if url has queryString 
    const hasQueryStr = location.state.queryString ? true : false;

    return(
        <div className="van-details-page">
            <Link to={hasQueryStr ? `..?${location.state.queryString}`: ".." } relative="path" className="go-back-btn"><AiOutlineArrowLeft className="icon" /> back to {hasQueryStr ? `${location.state.queryString.split("=")[1]}`: "all" } vans</Link>
            <div className="van-details">
                <img src={van.img} alt="van" />
                <div className="van-details-van-data">
                <span className={van.category && `van-category ${van.category.toLowerCase()}-selected`}>{van.category}</span>
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