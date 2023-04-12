import { useParams } from "react-router-dom";

const VanDetails = () => {
    const {id} = useParams();
    console.log(id);
    return(
        <div>this is the details page</div>
    );
}

export default VanDetails;