import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #9aa8c6 50%, #dcdcdc 100%)'}}>
            <h1 className="mb-5 text-dark" style={{fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '3rem'}}>Welcome to My App</h1>
            <div className="mb-3">
                <Button as={Link} to="/input" variant="secondary" size="lg">
                    写真撮影・デジタルサイン検証
                </Button>
            </div>
            <div className="mb-3">
                <Button as={Link} to="/inputmulti" variant="secondary" size="lg">
                    複数件入力遷移検証
                </Button>
            </div>
        </div>
    )
}

export default Home;
