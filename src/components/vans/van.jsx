import { useState, useEffect } from "react";
import { useSearchParams, Link, useLoaderData } from "react-router-dom";

// getting the function taat gets data from the server 
import { loadVans } from "../../fetchApi";


// components 
import VanCard from "./van/van-card/vanCard";

// style sheet 
import "./van.styles.scss";


// this function will run before the route changes 
export const loader = () => {
    // return loadVans();
    return loadVans()
}

const Vans = () => {
    const [...vans] = useLoaderData()

    // getting the query string 
    const [searchParams, setSearchParams] = useSearchParams();
    // queryString
    const typeFilter = searchParams.get("type");


    // filtering the van depending upon types 
    const displayVans = typeFilter ? vans.filter(obj => obj.category.toLowerCase() === typeFilter) : vans;

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
             {displayVans.map(({id, name, price, category, img}) => {
                return(<VanCard key={id} id={id} typeFilter={typeFilter} state={{queryString: searchParams.toString()}} name={name} price={price} category={category} img={img} />);
            })} 
            </div>
        </div>
    );
}

export default Vans;