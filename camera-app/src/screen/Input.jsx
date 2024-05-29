import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Input = () => {

    const [name, setName] = useSearchParams({ q: '' });
    const text = name.get('q');
    const navigate = useNavigate();
    return (
        <>
            <h1>入力画面</h1>
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setName({ q: e.target.value })}
                />
            </div>
            <Link to={"/photo"}>写真撮影</Link>
            <Button
            onClick={() => navigate('/photo', { state: { text, }, })}
            variant='secondary'
            >
                次へ
            </Button>
        </>
    )
};

export default Input;
