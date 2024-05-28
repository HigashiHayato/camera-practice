import './App.css';
import { Article } from "./components/index";
import Webcam from "react-webcam";

function App() {
  return (
    <div>
      <Article
        title={'カメラアプリ検証'}
      />
      <Webcam />
    </div>
  );
}

export default App;
