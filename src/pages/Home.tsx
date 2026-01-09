
import React from "react";
import home from "../assets/home.jpg";
import onas from "../assets/onas.jpg";
import { Link } from "react-router-dom";
import { FaBrain, FaClipboardCheck, FaHandHoldingMedical, FaPuzzlePiece } from "react-icons/fa";

/* ========= Ikony (inline SVG, kolor przez currentColor) ========= */

const CheckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" className="text-sage-600" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9 16.17l-3.88-3.88a1 1 0 10-1.41 1.41l4.59 4.59a1 1 0 001.41 0l10-10a1 1 0 10-1.41-1.41L9 16.17z"
    />
  </svg>
);

const StarIcon: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" className={filled ? "text-sage-600" : "text-sage-100"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 17.27l4.15 2.51-1.11-4.76 3.68-3.19-4.83-.41L12 7.1l-1.89 4.32-4.83.41 3.68 3.19-1.11 4.76L12 17.27z"
    />
  </svg>
);

/* ========= Typy ========= */
type PriceRow = { service: string; price: string; icon?: React.FC };
type Testimonial = { name: string; text: string; rating?: number };

/* ========= Wspólne komponenty ========= */
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-[2rem] font-display text-ink-900">{children}</h2>
);

/* ========= Tabela cennika ========= */
const PriceTableSimple: React.FC<{ rows: PriceRow[] }> = ({ rows }) => (
  <div className="card-gradient p-0 overflow-hidden rounded-2xl shadow-card border border-white/60">
    <table className="w-full border-collapse">
      <thead className="bg-white/70">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-medium text-ink-900 border-b border-black/10 w-[70%]">Usługa</th>
          <th className="px-4 py-3 text-left text-sm font-medium text-ink-900 border-b border-black/10 w-[30%]">Cena</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.service} className="hover:bg-sage-50/50 transition-colors">
            <td className="px-4 py-3 align-top border-t border-black/5">
              <div className="flex items-center gap-3">
                {r.icon ? <span className="icon-pill text-sage-600">{React.createElement(r.icon)}</span> : null}
                <span className="font-display text-[1.05rem]">{r.service}</span>
              </div>
            </td>
            <td className="px-4 py-3 align-top border-t border-black/5 font-medium">{r.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="px-4 py-3 text-xs text-ink-700/70">
      * W naszym gabinecie istnieje możliwość płatności: gotówką, kartą online, poprzez system znanylekarz.
    </div>
    <div className="px-4 py-3 text-xs text-ink-700/70">
      ** Ostateczna cena diagnozy zależy od zakresu badań i zostanie potwierdzona po konsultacji wstępnej.
    </div>
  </div>
);

/* ========= Kontakt: adres + mapa ========= */
const ContactBlock: React.FC<{
  addressLines: string[];
  mapEmbedSrc: string;
}> = ({ addressLines, mapEmbedSrc }) => (
  <div className="space-y-6">
    {/* ===== ADRES + TELEFON ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* ADRES */}
      <div className="card-gradient p-6">
        <h3 className="font-display text-xl font-bold">Adres</h3>
        <div className="mt-3 text-sm space-y-1">
          {addressLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>

      {/* TELEFON */}
      <div className="card-gradient p-6">
        <h3 className="font-display text-xl font-bold">Telefon:</h3>
        <p className="text-xs text-ink-600 mt-1">
          Agnieszka Sujata
        </p><a
          href=""
          className="mt-1 block text-lg font-semibold text-primary hover:underline">
             
           📞 515 828 848
        </a>
        
        <a href="https://www.znanylekarz.pl/karolina-piekos/psycholog/krakow" target="_blank" rel="noopener noreferrer" className="btn-primary mt-2" > Umów wizytę </a>
      </div>
    </div>

    {/* ===== MAPA ===== */}
    <div className="card-gradient p-0 overflow-hidden rounded-2xl shadow-card border border-white/60">
      <iframe
        className="w-full h-[280px] md:h-[360px]"
        src={mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa — lokalizacja"
      />
    </div>
  </div>
    
);

/* ========= Karta opinii ========= */
const TestimonialCard: React.FC<Testimonial> = ({ name, text, rating = 5 }) => (
  <div className="rounded-2xl bg-white/90 shadow-soft border border-white/60 p-5">
    <div className="flex items-center gap-1 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </div>
    <p className="text-[15px]">{text}</p>
    <div className="mt-3 text-sm text-ink-700/75">{name}</div>
  </div>
);

/* ========= Główny komponent ========= */
export default function Home(): JSX.Element {
  const year = new Date().getFullYear();

  const heroPlaceholder = home;
  const aboutPlaceholder = onas

  const priceRows: PriceRow[] = [
    { service: "Konsultacja psychologiczna - pierwsza wizyta", price: "350 zł" },
    { service: "Konsultacja psychologiczna - każda kolejna", price: "300 zł" },
    { service: "Diagnoza ADHD", price: "od 1200 zł" },
    { service: "Diagnoza ADOS-2", price: "1600 zł" },
    { service: "Konsultacja / zajęcia (indywidualne)", price: "140zł/50min" },
    { service: "Terapia pedagogiczna (zajęcia wyrównawcze, pedagog specjalny)", price: "120zł/50min" },
    { service: "Terapia ręki w praktyce pedagogiczno-terapeutycznej", price: "120zł/50min" },
    { service: "Sporządzenie opinii/informacji o dziecku", price: "200zł" },
  ];

  const testimonials: Testimonial[] = [
    { name: "Gabriela", text: "Po raz kolejny jestem pod wrażeniem ogromnej empatii i zaangażowania Pani Karoliny. Wszystko wyjaśnione jest w niezwykle szczegółowy i racjonalny sposób i daje ogrom motywacji do działania w walce o swoje zdrowie. Polecam", rating: 5 },
    { name: "Natalia", text: "Jestem bardzo zadowolona z wizyty u pani Karoliny. Opowiadając o trudnościach swojego dziecka innym specjalistom niejednokrotnie miałam wrażenie, że pozostaje ono w ich rozumieniu płaskim, kartonowym modelem z tektury - pani Karolina w opowieści widziała człowieka, którym była żywo zainteresowana. Kiedy opowiadałam o naszych trudnościach, pani psycholog zadawała celne pytania; podczas całej wizyty panowała bezpieczna, kojąca atmosfera. Otrzymałam wskazówki dotyczące dalszego postępowania, a także coś niezwykle cennego - zrozumienie i wsparcie! Dziękuję :)", rating: 5 },
    { name: "Małgosia", text: "Bardzo dobry wpływ na małego pacjenta. Syn przestał się buntować już po pierwszej wizycie ogromny progres w zachowaniu. Marudny i smutny synek wyszedl uśmiechnięty i radosny z gabinetu. Wspaniała terapeutka", rating: 5 },
  ];

  return (
    
    <main className="min-h-screen">
      {/* ===== HERO + MENU ===== */}
      <section className="page-bg-top">
       

        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 pb-8">
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl leading-tight">
              Konsultacje psychologiczne i pedagogiczne
            </h1>
            <p className="mt-4 text-lg text-ink-700/85">
              Dla dzieci, młodzieży i dorosłych. Wspieramy rozwój, pomagamy zrozumieć i rzetelnie diagnozujemy w obszarze emocji, relacji i nauki.
            </p>
            <div className="mt-6">
              <Link to="/oferta" className="btn-primary">
                Poznaj ofertę
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-soft border border-white/60 ">
            <img
              src={heroPlaceholder}
              alt="Scena konsultacji — sekcja Home"
              className="w-full h-[280px] md:h-[340px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== O NAS ===== */}
      <section id="onas" className="page-bg-mid">
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          <div>
            <SectionHeading>O nas</SectionHeading>
            <p className="mt-4">
              Zapraszamy na konsultacje psychologiczne i pedagogiczne dla dzieci, młodzieży i dorosłych. Wspieramy rozwój, pomagamy w zrozumieniu i rzetelnej diagnozie w sferze emocji, relacji i nauki.
            </p>

            <ul className="mt-6 space-y-3">
              {["Doświadczeni specjaliści", "Indywidualne podejście", "Wsparcie na każdym etapie"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-0.5"><CheckIcon /></div>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to="/zespol" className="btn-primary">
                Poznaj nasz zespół
              </Link>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-soft border border-white/60">
            <img
              src={aboutPlaceholder}
              alt="Gabinet i rozmowa — sekcja O nas"
              className="w-full h-[260px] md:h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== OFERTA ===== */}
      <section id="oferta" className="page-bg-mid">
        <div className="container max-w-6xl py-6">
          <SectionHeading>Oferta diagnostyczna</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-gradient p-5">
              <div className="icon-pill mb-4"><FaBrain size={22} /></div>
              <h3 className="font-display text-xl font-bold">Diagnoza ADOS-2</h3>
              <p className="mt-2 text-sm">Badanie ADOS-2 polega na ustrukturyzowanej obserwacji zachowania osoby badanej w trakcie specjalnie dobranych zadań, zabaw i rozmów. Ich forma jest dostosowana do wieku, poziomu rozwoju oraz możliwości komunikacyjnych danej osoby — od małych dzieci po osoby dorosłe.</p>
              <br></br>
              <Link to="/oferta" className="mt-2 text-sm">
                czytaj dalej →
              </Link>
            </div>
            <div className="card-gradient p-5">
              <div className="icon-pill mb-4"><FaPuzzlePiece size={22} /></div>
              <h3 className="font-display text-xl font-bold">Diagnoza ADHD</h3>
              <p className="mt-2 text-sm">Diagnoza ADHD (zespołu nadpobudliwości psychoruchowej z deficytem uwagi) to wieloetapowy proces, którego celem jest rzetelna ocena funkcjonowania danej osoby w obszarze uwagi, impulsywności oraz poziomu aktywności.</p>
              <br></br>
              <Link to="/oferta" className="mt-2 text-sm">
                czytaj dalej →
              </Link>
            </div>
            <div className="card-gradient p-5">
              <div className="icon-pill mb-4"><FaHandHoldingMedical size={22} /></div>
              <h3 className="font-display text-xl font-bold">Konsultacje psychologiczne</h3>
              <p className="mt-2 text-sm">Konsultacje psychologiczne to spotkania, których celem jest zrozumienie zgłaszanych trudności, określenie potrzeb oraz zaplanowanie odpowiedniego wsparcia. W pracy z dziećmi i młodzieżą proces ten wymaga czasu i obserwacji, dlatego zazwyczaj obejmuje kilka spotkań.</p>
              <br></br>
              <Link to="/oferta" className="mt-2 text-sm">
                czytaj dalej →
              </Link>
            </div>
            <div className="card-gradient p-5">
              <div className="icon-pill mb-4"><FaClipboardCheck size={22} /></div>
              <h3 className="font-display text-xl font-bold">Konsultacje pedagogiczne</h3>
              <p className="mt-2 text-sm">Celem konsultacji jest lepsze zrozumienie dziecka, pomoc w codziennych wyzwaniach oraz wzmocnienie kompetencji rodziców.</p>
              <br></br>
              <Link to="/oferta" className="mt-2 text-sm">
                czytaj dalej →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CENNIK + KONTAKT ===== */}
      <section id="cennik" className="page-bg-bottom">
        <div className="container max-w-6xl py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SectionHeading>Cennik</SectionHeading>
            <div className="mt-6"><PriceTableSimple rows={priceRows} /></div>
          </div>
          <div>
            <SectionHeading>Kontakt</SectionHeading>
            <div className="mt-6">
              <ContactBlock
                addressLines={["os. Na Skarpie 36/1", "31-910 Kraków"]}
                mapEmbedSrc="https://www.google.com/maps?q=os.%20Na%20Skarpie%2036/1,%20Kraków&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OPINIE ===== */}
      <section id="opinie" className="page-bg-bottom">
        <div className="container max-w-6xl py-10">
          <SectionHeading>Opinie klientów</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((op) => (
              <TestimonialCard key={op.name} name={op.name} text={op.text} rating={op.rating} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STOPKA ===== */}
      <footer className="container max-w-6xl py-8 text-sm text-ink-700/70">
        © {year} Diagnoza Odnowa — konsultacje psychologiczne i pedagogiczne
      </footer>
    </main>
  );
}
