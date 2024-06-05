import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom";
import React, { useRef, useState } from 'react';

const WriteDigitalSign = () => {
    const location = useLocation();
    const text = location.state.text;
    const textOthers = location.state.textOthers
    const navigate = useNavigate();

    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { offsetX, offsetY } = e.nativeEvent;

        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { offsetX, offsetY } = e.nativeEvent;

        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const endDrawing = () => {
        setIsDrawing(false);
    };

    const clearSignature = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const saveSignature = () => {
        const canvas = canvasRef.current;
        const images = canvas.toDataURL('image/png');
        navigate('/confirm', { state: { text, textOthers, images } });
    };
    return (
        <div>
            <div>
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={200}
                    style={{ border: '1px solid black' }}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={endDrawing}
                    onMouseOut={endDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={endDrawing}
                />
                <br />
                <button onClick={clearSignature}>Clear</button>
                <Button variant="secondary" onClick={saveSignature}>次へ</Button>
            </div>
        </div>

    )
}

export default WriteDigitalSign;
