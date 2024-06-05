import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom";

const SelectPhotoOrSign = () => {

    const location = useLocation();
    const text = location.state.text;
    const textOthers = location.state.textOthers
    const navigate = useNavigate();

    return (
        <div>
            <Button
                variant="secondary"
                onClick={() => navigate('/photo', { state: { text, textOthers } })}>
                写真撮影
            </Button>
            <Button
                variant="secondary"
                onClick={() => navigate('/digitalsign', { state: { text, textOthers } })}>
                デジタルサイン
            </Button>
        </div>

    )
}

export default SelectPhotoOrSign;
