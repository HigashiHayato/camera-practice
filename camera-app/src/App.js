import './App.css';
import { Article, Camera } from "./components/index";

function App() {
  return (
    <div>
      <Article
        title={'カメラアプリ検証'}
      />
      <Camera />
    </div>
  );
}

export default App;
