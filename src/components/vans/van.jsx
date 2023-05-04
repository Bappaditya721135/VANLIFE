import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

// getting the function taat gets data from the server 
import { loadVans } from "../../fetchApi";


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


    // loading state is for until the components fetch vans data 
    const [loadingState, setLoadingState] = useState(false);


    const [error, setError] = useState(null)

    
    // fecth call to dummy api server to get the vans data
    useEffect( ()=>{
        setLoadingState(true)
        const getVans = async () => {
            try {
                const {vans}= await loadVans()
                setVans(vans)
            }
            catch(err) {
                setError(err);
            }
            setLoadingState(false)
        }
        getVans()
     },[])

     if(loadingState) {
        return <h1 className="loading-text">Looding...</h1>
     }

     else if(error) {
        return <h1 className="error-text">something went wrong. {`${error.message}`}</h1>
     }
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
            {displayVans.length >0  && displayVans.map(({id, name, price, category, img}) => {
                return(<VanCard key={id} id={id} typeFilter={typeFilter} state={{queryString: searchParams.toString()}} name={name} price={price} category={category} img={img} />);
            })}
            </div>
        </div>
    );
}

export default Vans;