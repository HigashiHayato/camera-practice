import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Confirm = () => {
    const location = useLocation();
    const text = location.state.text;
    const images = location.state.images;

    const imageElements = images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} className="img-thumbnail mr-3 mb-3" style={{ maxWidth: '200px' }} />
    ));

    return (
        <div className="container py-4">
            <h1 className="mb-4">{text}</h1>
            <div className="d-flex flex-wrap mb-4">{imageElements}</div>
            <Button variant="secondary" href="/end">
                送信
            </Button>
        </div>
    )
}

export default Confirm;
