import Webcam from "react-webcam";
import { useRef, useCallback, useState, useEffect } from "react";
import "./Camera.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Camera = ({ imagesToPhoto }) => {
    const webcamRef = useRef(null);
    const [capturedImages, setCapturedImages] = useState([]);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        setCapturedImages(prevImages => [...prevImages, imageSrc]);
    }, [setCapturedImages]);

    useEffect(() => {
        imagesToPhoto(capturedImages);
    }, [capturedImages, imagesToPhoto]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <Button
                variant="danger"
                onClick={capture}
                style={{ marginTop: '10px', marginBottom: '10px' }}>
                撮影
            </Button>
            <h2>撮影した画像</h2>
            <div className="captured-images">
                {capturedImages.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`captured-${index}`} className="image" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Camera;
