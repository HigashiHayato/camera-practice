import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Input, Photo, Confirm, End, SelectPhotoOrSign, WriteDigitalSign, InputMultipleItems } from "./screen/index";

function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/input" element={<Input />} />
        <Route exact path="/select" element={<SelectPhotoOrSign />} />
        <Route exact path="/photo" element={<Photo />} />
        <Route exact path="/digitalsign" element={<WriteDigitalSign />} />
        <Route exact path="/confirm" element={<Confirm />} />
        <Route exact path="/end" element={<End/>} />
        <Route exact path="/inputmulti" element={<InputMultipleItems/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;
