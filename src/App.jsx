import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import About from "./about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<About />} />
        <Route path="*" element={<h1>404 |page not found </h1>} />
      </Routes>
    </>
  );
}

export default App;
