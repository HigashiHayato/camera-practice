import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const InputMultipleItems = () => {
    const [id, setId] = useState('');
    const [number, setNumber] = useState('1');
    const [inputHistory, setInputHistory] = useState([]);
    const navigate = useNavigate();
    const numberInputRef = useRef(null);
    const idInputRef = useRef(null);

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleIdKeyPress = (event) => {
        if (event.key === 'Enter') {
            numberInputRef.current.focus();
        }
    };

    const handleNumberKeyPress = (event) => {
        if (event.key === 'Enter') {
            const newItem = { id, number };
            setInputHistory(prevHistory => [...prevHistory, newItem]);
            setId('');
            setNumber('1');
            idInputRef.current.focus();
        }
    };

    // const handleSave = () => {
    //     const newItem = { id, number };
    //     setInputHistory(prevHistory => [...prevHistory, newItem]);
    //     setId('');
    //     setNumber('1');
    // };

    const handleNumberFieldChange = (e) => {
        const input = e.target.value;
        if (input.length === 8 && !isNaN(input)) {
            const newItem = { id, number };
            setInputHistory(prevHistory => [...prevHistory, newItem]);
            setId(input);
            setNumber('1');
            idInputRef.current.focus();
        } else {
            setNumber(input);
        }
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100" style={{ background: '#f8f9fa' }}>
            <h1 className="mb-4">複数件入力画面</h1>
            <Form style={{ width: '300px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginTop: '20px', marginBottom: '20px' }}>
                <Form.Group controlId="formId" style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="id(8桁)"
                        value={id}
                        onChange={handleIdChange}
                        onKeyPress={handleIdKeyPress}
                        ref={idInputRef}
                    />
                </Form.Group>
                <Form.Group controlId="formNumber" style={{ marginBottom: '20px' }}>
                    <Form.Control
                        type="text"
                        placeholder="数"
                        ref={numberInputRef}
                        value={number}
                        onChange={handleNumberChange}
                        onKeyPress={handleNumberKeyPress}
                        onChange={handleNumberFieldChange}
                    />
                </Form.Group>
                <div className="d-flex justify-content-between">
                    {/* <Button
                        onClick={handleSave}
                        variant="secondary"
                        style={{ width: '48%' }}
                        className="btn-hover"
                    >
                        保存
                    </Button> */}
                    <Button
                        onClick={() => navigate('/', { state: { text: id } })}
                        variant="secondary"
                        style={{ width: '48%' }}
                        className="btn-hover"
                    >
                        次へ
                    </Button>
                </div>
            </Form>
            <div className="mt-4">
                <h2>保存された入力内容:</h2>
                <ul>
                    {inputHistory.map((item, index) => (
                        <li key={index}>
                            <strong>ID:</strong> {item.id}, <strong>数:</strong> {item.number}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default InputMultipleItems;
