import {Link, NavLink, Outlet, useLoaderData} from "react-router-dom";

// getting the fetch function 
import { getHostVans } from "../../../fetchApi";

// react icon 
import {AiOutlineArrowLeft} from "react-icons/ai";

// style sheet 
import "./hostVanDetails.styles.scss"


export const hostVanDetailsLoader = ({params}) => {
    const {id} = params;
    return getHostVans(id)
}

export default function HostVanDetails() {

    // getiing the van data from loader function 
    const van = useLoaderData() 

    const activeNavStyle = {
        color: "black",
        fontWeight: 700,
        textDecoration: "underline",
    }
   
    return (
        <div className="host-van-details-container">
            <Link to=".." relative="path" className="van-details-back-btn"><AiOutlineArrowLeft className="icon" />back to all vans</Link>
            <div className="van-details">
                <img src={van.img}  alt="van-img"/>
                <div className="host-van-disc">
                    <span className="van-category">{van.category}</span>
                    <p className="host-van-details-name">{van.name}</p>
                    <p className="host-van-details-price">${van.price}/day</p>
                </div>
            </div>
                <div className="van-details-navbar">
                    <NavLink to="."
                    end
                    style={({isActive}) => isActive ? activeNavStyle : {}}>Details</NavLink>
                    <NavLink to="pricing"
                    style={({isActive}) => isActive ? activeNavStyle : {}}>Pricing</NavLink>
                    <NavLink to="photos"
                    style={({isActive}) => isActive ? activeNavStyle : {}}>Photos</NavLink>
                </div>
                <div className="outlet-section">
                    <Outlet context={van} />
                </div>
                
        </div>
    )
}