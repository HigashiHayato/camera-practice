import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Input, Photo, Confirm, End } from "./screen/index";

function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/input" element={<Input />} />
        <Route exact path="/photo" element={<Photo />} />
        <Route exact path="/confirm" element={<Confirm />} />
        <Route exact path="/end" element={<End/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;
