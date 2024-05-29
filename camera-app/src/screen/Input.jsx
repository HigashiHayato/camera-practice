import { Link } from "react-router-dom";

const Input = () => {
    return (
        <>
            <h1>入力画面</h1>
            <Link to={"/photo"}>写真撮影</Link>
        </>
    )
}

export default Input;
