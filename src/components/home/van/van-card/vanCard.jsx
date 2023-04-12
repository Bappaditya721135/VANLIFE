import "./vanCard.styles.scss";

const VanCard = ({name, price, category, img}) => {
    return(
            <div className="van-card">
                <img src={img} alt="van" />
                <div className="van-details">
                    <p className="van-name">{name}</p>
                    <p className="van-price">{price}$/day</p>
                </div>
                <button className="van-category">{category}</button>
            </div>
                );
}

export default VanCard;