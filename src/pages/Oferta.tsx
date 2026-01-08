import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Oferta() {
  return (
    <main className="min-h-screen page-bg-mid">
      {/* ===== HEADER ===== */}
      <header className="container max-w-6xl py-6 flex items-center justify-between">
        
        <Link to="/" className="btn-primary">
          Powrót
        </Link>
      </header>

      {/* ===== OFERTA ===== */}
      <section className="container max-w-6xl py-10">
        <h1 className="font-display text-4xl mb-8">Oferta</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* OPIS */}
          <div className="card-gradient p-6">
            <p>Zapraszamy na konsultacje psychologiczne i pedagogiczne dla dzieci, młodzieży oraz dorosłych. Wspieramy osoby, które poszukują zrozumienia, pomocy i rzetelnej diagnozy w obszarze emocji, rozwoju, relacji oraz funkcjonowania w codziennym życiu.

Pracujemy w oparciu o aktualną wiedzę, doświadczenie i indywidualne podejście do każdej osoby i każdej rodziny. Tworzymy bezpieczną, spokojną przestrzeń, w której można zatrzymać się, przyjrzeć trudnościom i wspólnie poszukać najlepszych rozwiązań.



W naszej ofercie znajdują się m.in.:

konsultacje psychologa
konsultacje pedagoga
wsparcie dzieci, młodzieży i dorosłych
pomoc dla rodziców i opiekunów
Na kolejnych zakładkach znajdą Państwo szczegółowe informacje dotyczące diagnozy zaburzeń ze spektrum autyzmu (ADOS-2), diagnozy ADHD, a także opisy konsultacji psychologicznych i pedagogicznych — wraz z przebiegiem spotkań i zakresem możliwego wsparcia.

Zapraszamy do zapoznania się z ofertą oraz do kontaktu — pierwsza rozmowa może być ważnym krokiem w stronę lepszego zrozumienia i otrzymania realnej pomocy.

ADOS-2 (Autism Diagnostic Observation Schedule, Second Edition) to wystandaryzowane narzędzie diagnostyczne służące do oceny funkcjonowania osoby pod kątem zaburzeń ze spektrum autyzmu (ASD). Jest ono uznawane za jeden z najważniejszych i najbardziej rzetelnych elementów procesu diagnostycznego na świecie.

Badanie ADOS-2 polega na ustrukturyzowanej obserwacji zachowania osoby badanej w trakcie specjalnie dobranych zadań, zabaw i rozmów. Ich forma jest dostosowana do wieku, poziomu rozwoju oraz możliwości komunikacyjnych danej osoby — od małych dzieci po osoby dorosłe.

Co jest oceniane podczas badania ?
W trakcie diagnozy psycholog zwraca szczególną uwagę na:

sposób komunikacji werbalnej i niewerbalnej,
jakość kontaktu społecznego i relacji z drugą osobą,
umiejętność dzielenia uwagi i reagowania na emocje innych,
wzorce zachowań, zainteresowań i aktywności,
elastyczność myślenia oraz reakcje na zmiany.
Badanie ma charakter interakcyjny i naturalny — nie jest testem „na wynik”, nie wymaga przygotowania ani udzielania „poprawnych odpowiedzi”. Celem jest jak najwierniejsze uchwycenie codziennego sposobu funkcjonowania osoby badanej.

Jak wygląda przebieg diagnozy ADOS-2?
Diagnoza przeprowadzana jest przez wykwalifikowanego psychologa posiadającego certyfikację ADOS-2. Spotkanie trwa zazwyczaj od 40 do 90 minut, w zależności od modułu badania. Po jego zakończeniu specjalista dokonuje szczegółowej analizy obserwowanych zachowań zgodnie z określonymi kryteriami.
Wynik ADOS-2 nie stanowi samodzielnej diagnozy, lecz jest bardzo ważnym elementem całościowego procesu diagnostycznego, który obejmuje również wywiad kliniczny, analizę rozwoju oraz inne narzędzia psychologiczne.

Dlaczego warto wykonać badanie ADOS-2?
ADOS-2 pozwala na:

rzetelną i obiektywną ocenę funkcjonowania w obszarze spektrum autyzmu,
lepsze zrozumienie trudności i mocnych stron danej osoby,
postawienie trafnych rekomendacji terapeutycznych i edukacyjnych,
wsparcie procesu diagnostycznego na każdym etapie życia.
Badanie przeprowadzane jest w bezpiecznej i przyjaznej atmosferze, z poszanowaniem indywidualnych potrzeb osoby badanej.</p>
          </div>

        
        </div>
      </section>
    </main>
  );
}
