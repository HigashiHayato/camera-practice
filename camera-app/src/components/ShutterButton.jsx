import React from "react";

const ShutterButton = () => {
    const webcamRef = React.useRef();
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    return (
        <button onClick={capture}>
            撮影
        </button>
    )
}

export default ShutterButton;
