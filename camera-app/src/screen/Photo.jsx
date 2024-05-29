import { Article, Camera } from "../components/index";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom";

const Photo = () => {
  const location = useLocation();
  const text = location.state.text;
  const navigate = useNavigate();

  return (
    <div>
      <Article
        title={'カメラアプリ検証'}
      />
      <Camera />
      <Button
        variant="secondary"
        onClick={() => navigate('/confirm', { state: { text, }, })}
      >
        確定画面
      </Button>
    </div>
  );
}

export default Photo;
