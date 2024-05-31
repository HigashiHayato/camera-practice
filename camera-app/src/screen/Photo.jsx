import { Article, Camera } from "../components/index";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Photo = () => {
  const location = useLocation();
  const text = location.state.text;
  const textOthers = location.state.textOthers
  const navigate = useNavigate();

  const [images, setImages] = useState('');
  const imagesToPhoto = (childdata) => {
    setImages(childdata);
  }

  return (
    <div className="container py-4">
      <Article title={'カメラアプリ検証'} />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Camera imagesToPhoto={imagesToPhoto} />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <Button
            variant="secondary"
            onClick={() => navigate('/confirm', { state: { text, textOthers, images } })}
            style={{ marginTop: '-20px' }}
          >
            次へ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Photo;
