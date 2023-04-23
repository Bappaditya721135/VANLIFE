import {Link, NavLink, useParams, Outlet} from "react-router-dom";
import {useState, useEffect} from "react"

// react icon 
import {AiOutlineArrowLeft} from "react-icons/ai";

// style sheet 
import "./hostVanDetails.styles.scss"

export default function HostVanDetails() {
    const [van, setVan] = useState({})
    const {id} = useParams();
    useEffect(() => {
        fetch(`/api/van/${id}`)
        .then(res => res.json())
        .then(data => setVan(data))
    }, [])

    const activeNavStyle = {
        color: "black",
        fontWeight: 700,
        textDecoration: "underline",
    }
   
    return (
        <div className="host-van-details-container">
            <Link to=".." relative="path" className="van-details-back-btn"><AiOutlineArrowLeft className="icon" />back to all vans</Link>
            <div className="van-details">
                <img src={van.img} />
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