
import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import onas from "../assets/onas.png";

/* ========= Ikony (inline SVG, kolor przez currentColor) ========= */
const CheckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" className="text-sage-600" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9 16.17l-3.88-3.88a1 1 0 10-1.41 1.41l4.59 4.59a1 1 0 001.41 0l10-10a1 1 0 10-1.41-1.41L9 16.17z"
    />
  </svg>
);
const TalkIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="text-sage-600" aria-hidden="true">
    <path fill="currentColor" d="M12 4a8 8 0 00-8 8 8 8 0 008 8h1l3 3v-3a8 8 0 004-7c0-4.42-3.58-8-8-8z" />
  </svg>
);
const BookIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="text-sage-600" aria-hidden="true">
    <path fill="currentColor" d="M6 4h9a3 3 0 013 3v12H6a3 3 0 01-3-3V7a3 3 0 013-3zm0 2a1 1 0 00-1 1v9a1 1 0 001 1h10V7a1 1 0 00-1-1H6z" />
  </svg>
);
const BrainIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="text-sage-600" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 3a4 4 0 00-4 4 3 3 0 00-3 3c0 .5.12.98.34 1.4A3.5 3.5 0 005 16a3.5 3.5 0 003.5 3.5H10a2.5 2.5 0 005 0h1.5A3.5 3.5 0 0020 16c0-1.05-.45-2-1.18-2.66.3-.42.48-.93.48-1.48a3 3 0 00-3-3A4 4 0 0012 3z"
    />
  </svg>
);
const PuzzleIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="text-sage-600" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20 13h-1a2 2 0 00-2 2v1h-2a2 2 0 010-4h2v-2a2 2 0 00-2-2h-1V6a2 2 0 10-4 0v2H8a2 2 0 00-2 2v2H5a2 2 0 000 4h1v1a2 2 0 002 2h2v1a2 2 0 104 0v-1h1a2 2 0 002-2v-1h1a2 2 0 000-4z"
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
      * Ostateczna cena diagnozy zależy od zakresu badań i zostanie potwierdzona po konsultacji wstępnej.
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
        <p className="text-xs text-ink-600 mt-1">
          pn–pt 9:00–17:00
        </p>
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
export default function App(): JSX.Element {
  const year = new Date().getFullYear();

  const heroPlaceholder = home;
  const aboutPlaceholder = onas

  const priceRows: PriceRow[] = [
    { service: "Konsultacja psychologiczna", price: "220 zł" },
    { service: "Konsultacja pedagogiczna", price: "200 zł" },
    { service: "Diagnoza ADHD", price: "od 1200 zł" },
    { service: "Diagnoza ADOS-2", price: "od 1500 zł" },
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
              <a href="/oferta" className="btn-primary">
                Poznaj ofertę
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-soft border border-white/60">
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
              <a href="/zespol" className="btn-primary">
                Poznaj nasz zespół
              </a>
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
              <div className="icon-pill mb-4"><PuzzleIcon /></div>
              <h3 className="font-display text-xl font-bold">Diagnoza ADOS-2</h3>
              <p className="mt-2 text-sm">Badanie ADOS-2 polega na ustrukturyzowanej obserwacji zachowania osoby badanej w trakcie specjalnie dobranych zadań, zabaw i rozmów. Ich forma jest dostosowana do wieku, poziomu rozwoju oraz możliwości komunikacyjnych danej osoby — od małych dzieci po osoby dorosłe.</p>
              <br></br>
              <a href="/ados" className="mt-2 text-sm">
                czytaj dalej →
              </a>
            </div>
            <div className="card-gradient p-5">
              <div className="icon-pill mb-4"><BrainIcon /></div>
              <h3 className="font-display text-xl font-bold">Diagnoza ADHD</h3>
              <p className="mt-2 text-sm">Diagnoza ADHD (zespołu nadpobudliwości psychoruchowej z deficytem uwagi) to wieloetapowy proces, którego celem jest rzetelna ocena funkcjonowania danej osoby w obszarze uwagi, impulsywności oraz poziomu aktywności.</p>
              <br></br>
              <a href="/adhd" className="mt-2 text-sm">
                czytaj dalej →
              </a>
            </div>
            <div className="card-gradient p-5">
              <div className="icon-pill mb-4"><TalkIcon /></div>
              <h3 className="font-display text-xl font-bold">Konsultacje psychologiczne</h3>
              <p className="mt-2 text-sm">Konsultacje psychologiczne to spotkania, których celem jest zrozumienie zgłaszanych trudności, określenie potrzeb oraz zaplanowanie odpowiedniego wsparcia. W pracy z dziećmi i młodzieżą proces ten wymaga czasu i obserwacji, dlatego zazwyczaj obejmuje kilka spotkań.</p>
              <br></br>
              <a href="/konsultacje-psychologiczne" className="mt-2 text-sm">
                czytaj dalej →
              </a>
            </div>
            <div className="card-gradient p-5">
              <div className="icon-pill mb-4"><BookIcon /></div>
              <h3 className="font-display text-xl font-bold">Konsultacje pedagogiczne</h3>
              <p className="mt-2 text-sm">Celem konsultacji jest lepsze zrozumienie dziecka, pomoc w codziennych wyzwaniach oraz wzmocnienie kompetencji rodziców.</p>
              <br></br>
              <a href="/konsultacje-pedagogiczne" className="mt-2 text-sm">
                czytaj dalej →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CENNIK + KONTAKT ===== */}
      <section id="cennik-kontakt" className="page-bg-bottom">
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
                mapEmbedSrc="https://www.google.com/maps?q=ul.%36/1NaSkarpie%2024,%20Kraków&output=embed"
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
