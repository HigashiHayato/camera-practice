import Webcam from "react-webcam";
import { useRef, useCallback, useState } from "react";
import "./Camera.css";

const Camera = () => {
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        setCapturedImages(preveImages => [...preveImages, imageSrc]);
    }, []);

    const [capturedImages, setCapturedImages] = useState([]);

    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>
                撮影
            </button>
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
