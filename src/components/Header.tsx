import { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const HEADER_HEIGHT = 80; // wysokość headera w px

  const close = () => setOpen(false);

  const handleLogoClick = () => {
    close();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleScrollTo = (id: string) => {
    close();
    if (location.pathname === "/") {
      scroller.scrollTo(id, { smooth: true, duration: 500, offset: -HEADER_HEIGHT });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md" style={{ height: HEADER_HEIGHT }}>
        <div className="container max-w-6xl py-4 flex items-center justify-between">
          {/* LOGO */}
          <div onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          {/* DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <RouterLink to="/oferta" className="hover:text-sage-600">
              Oferta
            </RouterLink>

            <button
              onClick={() => handleScrollTo("cennik")}
              className="cursor-pointer text-grey-700 hover:text-sage-600"
            >
              Cennik
            </button>

            <RouterLink to="/zespol" className="hover:text-sage-600">
              Zespół
            </RouterLink>

            <a
              href="https://www.znanylekarz.pl/karolina-piekos/psycholog/krakow"
              className="btn-primary"
            >
              Umów wizytę
            </a>
          </nav>

          {/* HAMBURGER */}
          <button onClick={() => setOpen(true)} className="md:hidden text-2xl font-bold">
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="absolute right-0 top-0 w-4/5 h-full bg-white p-6">
            {/* IKONA ZAMYKANIA */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-2xl text-gray-800"
            >
              <FaTimes />
            </button>

            <nav className="flex flex-col gap-6 text-lg mt-8 items-start text-left">
  <RouterLink to="/oferta" onClick={close}>
    Oferta
  </RouterLink>

  <button
    onClick={() => handleScrollTo("cennik")}
    className="cursor-pointer text-grey-700"
  >
    Cennik
  </button>

  <RouterLink to="/zespol" onClick={close}>
    Zespół
  </RouterLink>

  <a
    href="https://www.znanylekarz.pl/karolina-piekos/psycholog/krakow"
    onClick={close}
    className="btn-primary"
  >
    Umów wizytę
  </a>
</nav>
          </div>
        </div>
      )}

      {/* DODATKOWY SPACER POD HEADER */}
      <div style={{ height: HEADER_HEIGHT }} />
    </>
  );
}
