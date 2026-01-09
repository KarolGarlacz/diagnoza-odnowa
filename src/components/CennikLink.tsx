import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  className?: string;
  onClick?: () => void;
};

export function CennikLink({ className, onClick }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  // JESTEŚ NA STRONIE GŁÓWNEJ → scroll
  if (location.pathname === "/") {
    return (
      <ScrollLink
        to="cennik"
        smooth
        duration={500}
        offset={-96}
        className={className}
        onClick={onClick}
      >
        Cennik
      </ScrollLink>
    );
  }

  // JESTEŚ NA INNEJ STRONIE → wróć na / i scroll
  return (
    <button
      className={className}
      onClick={() => {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById("cennik");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        onClick?.();
      }}
    >
      Cennik
    </button>
  );
}
