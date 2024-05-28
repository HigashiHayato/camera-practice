import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Photo} from "./screen/index";

function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/photo" element={<Photo />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;
