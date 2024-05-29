import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Confirm = () => {
    const location = useLocation();
    const text = location.state.text;
    const images = location.state.images;

    const imageElements = images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} />
    ));

    return (
        <>
            <h1>{text}</h1>
            <div className="captured-images">{imageElements}</div>
            <Button
                variant="secondary"
                href="/end"
            >
                送信
            </Button>
        </>


    )
}

export default Confirm;
