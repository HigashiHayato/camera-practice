import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom";
import './SelectPhotoOrSign.css'; // スタイルシートのインポート

const SelectPhotoOrSign = () => {
    const location = useLocation();
    const text = location.state.text;
    const textOthers = location.state.textOthers;
    const navigate = useNavigate();

    return (
        <div className="fullscreen-container">
            <div className="centered-content">
                <Button
                    variant="secondary"
                    onClick={() => navigate('/photo', { state: { text, textOthers } })}
                    className="button-margin">
                    写真撮影
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => navigate('/digitalsign', { state: { text, textOthers } })}
                    className="button-margin">
                    デジタルサイン
                </Button>
            </div>
        </div>
    )
}

export default SelectPhotoOrSign;
