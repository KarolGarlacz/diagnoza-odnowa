import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import karolinaImg from "../assets/Kaja.jpg"
import agnieszkaImg from "../assets/Agnieszka.png"

export default function Team() {
  return (
    <main className="min-h-screen page-bg-mid">
      {/* ===== HEADER ===== */}
      
        
     
     

      {/* ===== ZESPÓŁ ===== */}
      <section className="container max-w-6xl py-10">
        <h1 className="font-display text-4xl mb-8">Nasz zespół</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* PRACOWNIK */}
          <div className="card-gradient p-6">
  <div className="flex flex-col sm:flex-row gap-6">
    <img
      src={karolinaImg}
      alt="mgr Karolina Piękoś – psycholog dziecięcy"
      className="w-full sm:w-80 h-104 object-cover rounded-2xl shadow-soft"
    />

    <div>
      <h3 className="font-display text-xl font-bold">
        mgr Karolina Piękoś
      </h3>
      <p className="text-sm text-ink-700 mt-1">
        Psycholog 
      </p>
        <p className="mt-6 text-base leading-relaxed text-gray-800">
  <span className="block mb-4">
    Jestem psychologiem, absolwentką Uniwersytetu Jagiellońskiego. W zawodzie pracuję nieprzerwanie od 2007 roku, wspierając dzieci, młodzież oraz ich rodziny w radzeniu sobie z trudnościami emocjonalnymi, rozwojowymi i wychowawczymi.
  </span>

  <span className="block mb-4">
    W swojej pracy kieruję się holistycznym i systemowym spojrzeniem na człowieka – uwzględniam nie tylko objawy, ale także kontekst rodzinny, szkolny i emocjonalny. Szczególną wagę przykładam do uważnego słuchania, empatii oraz wrażliwości na potrzeby dziecka, wierząc, że poczucie bezpieczeństwa i zrozumienia jest podstawą skutecznej pomocy.
  </span>

  <span className="block mb-4">
    Posiadam uprawnienia certyfikowanego diagnosty ADOS-2, co pozwala mi rzetelnie i profesjonalnie uczestniczyć w procesie diagnozy zaburzeń ze spektrum autyzmu. Regularnie podnoszę swoje kwalifikacje zawodowe, uczestnicząc w szkoleniach, kursach i superwizjach, aby oferować wsparcie zgodne z aktualną wiedzą psychologiczną i najlepszymi standardami pracy.
  </span>

  <span className="block">
    W relacji z pacjentami i ich rodzinami stawiam na partnerstwo, szacunek i indywidualne podejście, dostosowane do potrzeb i możliwości każdej osoby.
  </span>
</p>
          
 </div>
  </div>
</div>
          <div className="card-gradient p-6">
  <div className="flex flex-col sm:flex-row gap-6">
    <img
      src={agnieszkaImg}
      alt="mgr Agnieszka Sujata – pedagog"
      className="w-full sm:w-80 h-104 object-cover rounded-2xl shadow-soft"
    />

    <div>
      <h3 className="font-display text-xl font-bold">
        mgr Agnieszka Sujata
      </h3>
      <p className="text-sm text-ink-700 mt-1">
        Pedagog
      </p>
            <p className="mt-6 text-base leading-relaxed text-gray-800">
  <span className="block mb-4">
    Jestem oligofrenopedagogiem, absolwentką UP ze specjalizacją edukacja i terapia osób ze spektrum autyzmu, jednak w swojej praktyce pracuję również z dziećmi i młodzieżą z innymi niepełnosprawnościami. Studia podyplomowe oraz szkolenia specjalizacyjne, które kończyłam, pozwalają mi na korzystanie ze sprawdzonych i podpartych wiedzą akademicką metod. Prowadzę zajęcia z zakresu terapii ręki, obserwację i diagnozę w kierunku wczesnych objawów spektrum autyzmu, mutyzmu wybiórczego, zaburzeń sensorycznych. Jestem certyfikowanym diagnostą ADOS-2 z praktyką prowadzenia diagnozy dzieci, młodzieży oraz dorosłych. Prowadzę obserwacje w kierunku diagnozy różnicowej w kontekście spektrum autyzmu i ADHD, a także zajęcia rewalidacyjne dla dzieci ze specjalnymi potrzebami edukacyjnymi (m.in. ADHD, ASD, dysleksja, niepełnosprawność intelektualna).
  </span>

  <span className="block mb-4 font-semibold">
    Doświadczenie zawodowe:
  </span>

  <span className="block mb-4">
    Posiadam wieloletnie doświadczenie w pracy terapeutycznej z dziećmi i osobami ze spektrum autyzmu oraz z osobami z niepełnosprawnością sprzężoną. W swojej pracy wykorzystuję sprawdzone metody terapeutyczne, dostosowane indywidualnie do potrzeb pacjenta, w oparciu o EBM (medycyna oparta na dowodach). Dysponuję czyną umiejętnością korzystania z komunikacji wspomagającej i alternatywnej (AAC). 
  </span>

  <span className="block mb-4">
    Moim dodatkowym doświadczeniem, które pomaga w budowaniu relacji, jest bycie rodzicem dorosłej osoby w spektrum autyzmu. Jestem osobą uważną i otwartą na drugiego człowieka, w swojej praktyce kieruję się przekonaniem, że rodzic jest osobą, której wiedza o swoim dziecku jest podstawą do budowania pracy terapeutycznej.
  </span>
</p>

             </div>
  </div>
          </div>
        </div>
           <Link to="/" className="btn-primary mt-6">
          Powrót
        </Link>
      </section>
    </main>
  );
}
