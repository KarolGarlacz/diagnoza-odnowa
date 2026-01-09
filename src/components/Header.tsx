import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className="container max-w-6xl py-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-18" />
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* STRONA */}
          <Link to="/oferta" className="hover:text-sage-600">
            Oferta
          </Link>

          {/* SEKCYJNE */}
          <a href="/#/cennik-kontakt" className="hover:text-sage-600">
            Cennik
          </a>

          {/* STRONA */}
          <Link to="/zespol" className="hover:text-sage-600">
            Zespół
          </Link>

          {/* SEKCYJNE */}
          <a href="/#/cennik-kontakt" className="btn-primary">
            Umów wizytę
          </a>
        </nav>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(true)} className="md:hidden">
          ☰
        </button>
      </header>

      {/* MOBILE */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="absolute right-0 top-0 w-4/5 h-full bg-white p-6">
            <nav className="flex flex-col gap-6 text-lg">
              <Link to="/oferta" onClick={close}>
                Oferta
              </Link>

              <a href="/#/cennik-kontakt" onClick={close}>
                Cennik
              </a>

              <Link to="/zespol" onClick={close}>
                Zespół
              </Link>

              <a href="/#/cennik-kontakt" onClick={close} className="btn-primary">
                Umów wizytę
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
