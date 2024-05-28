import Webcam from "react-webcam";
import React from "react";
const Camera = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
    }, []);

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
        </div>
    )
}

export default Camera;
