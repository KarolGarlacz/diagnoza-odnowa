import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="container max-w-6xl py-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-18" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/oferta" className="hover:text-sage-600 transition">
            Oferta
          </a>
          <a href="#cennik-kontakt" className="hover:text-sage-600 transition">
            Cennik
          </a>
          <Link to="/zespol" className="hover:text-sage-600 transition">
            Zespół
          </Link>
          <a href="#cennik-kontakt" className="btn-primary">
            Umów wizytę
          </a>
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Otwórz menu"
        >
          <span className="w-6 h-0.5 bg-ink-900" />
          <span className="w-6 h-0.5 bg-ink-900" />
          <span className="w-6 h-0.5 bg-ink-900" />
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-cream shadow-lg p-6">
            <div className="flex items-center justify-between mb-8">
              <img src={logo} alt="Logo" className="h-14" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Zamknij menu"
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg">
              <a
                href="/oferta"
                onClick={() => setOpen(false)}
                className="hover:text-sage-600"
              >
                Oferta
              </a>
              <a
                href="#cennik-kontakt"
                onClick={() => setOpen(false)}
                className="hover:text-sage-600"
              >
                Cennik
              </a>
              <Link
                to="/zespol"
                onClick={() => setOpen(false)}
                className="hover:text-sage-600"
              >
                Zespół
              </Link>

              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 text-center"
              >
                Umów wizytę
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
