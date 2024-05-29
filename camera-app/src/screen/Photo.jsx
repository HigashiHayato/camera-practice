import { Article, Camera } from "../components/index";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Photo = () => {
  const location = useLocation();
  const text = location.state.text;
  const navigate = useNavigate();

  const [images, setImages] = useState('');
  const imagesToPhoto = (childdata) => {
    setImages(childdata);
  }

  return (
    <div>
      <Article
        title={'カメラアプリ検証'}
      />
      <Camera imagesToPhoto={imagesToPhoto}/>
      <Button
        variant="secondary"
        onClick={() => navigate('/confirm', { state: { text, images}, })}
      >
        次へ
      </Button>
    </div>
  );
}

export default Photo;
