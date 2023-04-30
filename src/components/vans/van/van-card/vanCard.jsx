import { Link } from "react-router-dom";

// styles sheet 
import "./vanCard.styles.scss";

const VanCard = ({id, name, price, category, img, state}) => {
    

    return(
            <div className="van-card">
                <Link to={`/vans/${id}`} state={state}>
                <img src={img} alt="van" />
                <div className="van-details">
                    <p className="van-name">{name}</p>
                    <p className="van-price">{price}$/day</p>
                </div>
                <span className="van-category">{category}</span>
                </Link>
            </div>
                );
}

export default VanCard;