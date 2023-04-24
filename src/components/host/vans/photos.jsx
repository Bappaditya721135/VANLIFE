import { useOutletContext } from "react-router-dom";

export default function Photos() {
    const van = useOutletContext();

    const imgStyle = {
        width: "100px",
    }
    return(
        <img src={van.img} style={imgStyle} alt="van-img"/>
    );
}