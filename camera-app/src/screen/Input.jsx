import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Input = () => {
    const [name, setName] = useSearchParams({ q: '' });
    const text = name.get('q');
    const navigate = useNavigate();
    const otherInputRef = useRef(null);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            otherInputRef.current.focus();
        }
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100" style={{background: '#f8f9fa'}}>
            <h1 className="mb-4">入力画面</h1>
            <Form style={{ width: '300px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginTop: '20px', marginBottom: '20px' }}>
                <Form.Group controlId="formName" style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={text}
                        onChange={(e) => setName({ q: e.target.value })}
                        onKeyPress={handleKeyPress}
                    />
                </Form.Group>
                <Form.Group controlId="formOther" style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="その他"
                        ref={otherInputRef}
                    />
                </Form.Group>
                <Button
                    onClick={() => navigate('/photo', { state: { text } })}
                    variant="secondary"
                    style={{ width: '100%' }}
                    className="btn-hover"
                >
                    次へ
                </Button>
            </Form>
        </div>
    );
};

export default Input;
