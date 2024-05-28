import Webcam from "react-webcam";
import {useRef, useCallback, useState} from "react";
const Camera = () => {
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        setCapturedImage(imageSrc);
    }, []);

    const [capturedImage, setCapturedImage] = useState(null);

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
            {capturedImage ? (
                <div>
                    <h2>キャプチャーされた画像:</h2>
                    <img src={capturedImage} alt="captured" />
                </div>
            ) : (
                <div>
                    <h2>画像を撮影してください</h2>
                </div>
            )}
        </div>
    )
}

export default Camera;
