import { Link } from "react-router-dom";

const Input = () => {
    return (
        <>
            <h1>入力画面</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <Link to={"/photo"}>写真撮影</Link>
        </>
    )
};

export default Input;
