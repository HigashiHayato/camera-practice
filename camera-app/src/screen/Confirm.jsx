import { useLocation } from "react-router-dom";

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
        </>


    )
}

export default Confirm;
