import { Routes, Route } from "react-router-dom";
import "./app.css"
import Home from "./page/Home/Home";
import Reservation from "./page/Reservas/Reservation";

export default function App() {

  return (
    <div  >
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Reservation" element={<Reservation />}  />
      </Routes>
    </div>
  );
}
