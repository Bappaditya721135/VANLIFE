import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";


// components 
import VanCard from "./van/van-card/vanCard";

// style sheet 
import "./van.styles.scss";

const Vans = () => {

    // getting the query string 
    const [searchParams, setSearchParams] = useSearchParams();
    // queryString
    const typeFilter = searchParams.get("type");

    // to store the vans data coming from the fetch request 
    const [vans, setVans] = useState([]);

    // filtering the van depending upon types 
    const displayVans = typeFilter ? vans.filter(obj => obj.category.toLowerCase() === typeFilter) : vans;

    
    // fecth call to dummy api server to get the vans data
    useEffect(()=>{
        fetch("/api/van")
        .then((res) => res.json())
        .then(({vans}) => setVans(vans));
    },[])
    return(
        <div className="van-container">
            <h2>Explore our van options</h2>
            <ul>
                <li>
                    <button onClick={() => setSearchParams({type: "simple"})} className={typeFilter === "simple" ? "simple-selected": ""}>Simple</button>
                </li>
                <li>
                    <button onClick={() => setSearchParams({type: "luxary"})} className={typeFilter === "luxary" ? "luxary-selected": ""}>Luxary</button>
                </li>
                <li>
                    <button onClick={() => setSearchParams({type: "rugged"})} className={typeFilter === "rugged" ? "rugged-selected": ""}>Rugged</button>
                </li>
                <li>
                {typeFilter && 
                        <button onClick={() => setSearchParams({})}>Clear filter</button>}
                </li>
            </ul>

            {/* this loop is for vanCard componen */}
            <div className="all-vans">
            {vans.length>0 ? displayVans.map(({id, name, price, category, img}) => {
                return(<VanCard key={id} id={id} typeFilter={typeFilter} state={{queryString: searchParams.toString()}} name={name} price={price} category={category} img={img} />);
            }) : <h1 className="loading-text">Loading...</h1>}
            </div>
        </div>
    );
}

export default Vans;