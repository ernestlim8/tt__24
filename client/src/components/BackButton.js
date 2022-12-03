import { useNavigate } from "react-router-dom"
import classes from "./Form.module.css";

export const BackButton = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.actions}>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}