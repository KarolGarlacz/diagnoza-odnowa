import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Oferta from "./pages/Oferta";
import Header from "./pages/Header"; // ⬅️ WAŻNE: components, nie pages

export default function App() {
  return (
    <>
      {/* MENU / HEADER */}
      <Header />

      {/* ROUTING */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zespol" element={<Team />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
    </>
  );
}
