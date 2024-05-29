import { useLocation } from "react-router-dom";

const Confirm = () => {
    const location = useLocation();
    const text = location.state.text;
    return (
        <h1>{text}</h1>
    )
}

export default Confirm;
