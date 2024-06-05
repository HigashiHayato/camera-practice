import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Confirm = () => {
    const location = useLocation();
    const text = location.state.text;
    const textOthers = location.state.textOthers;
    const images = location.state.images;

    const createImageElement = (image, index) => (
        <img key={index} src={image} alt={`-${index}`} className="img-thumbnail mr-3 mb-3" style={{ maxWidth: '200px' }} />
    );

    const renderImages = () => {
        // imagesが配列の場合
        if (Array.isArray(images)) {
            return images.map((image, index) => createImageElement(image, index));
        } else { // imagesが配列でない場合
            return createImageElement(images, 0);
        }
    };

    return (
        <div className="container py-4">
            <h1 className="mb-4">指名：{text}</h1>
            <h1 className="mb-4">その他：{textOthers}</h1>
            <div className="d-flex flex-wrap mb-4">
                {renderImages()}
            </div>
            <Button variant="secondary" href="/end">
                送信
            </Button>
        </div>
    )
}

export default Confirm;
