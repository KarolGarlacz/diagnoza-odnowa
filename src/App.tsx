import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Oferta from "./pages/Oferta";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      {/* ===== HEADER GLOBALNY ===== */}
      <Header />

      {/* ===== ROUTING ===== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/zespol" element={<Team />} />
      </Routes>
    </>
  );
}
