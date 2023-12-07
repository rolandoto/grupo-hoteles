import { Routes, Route } from "react-router-dom";
import "./app.css"
import Home from "./page/Home/Home";

export default function App() {

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home />}  />
      </Routes>
    </div>
  );
}
