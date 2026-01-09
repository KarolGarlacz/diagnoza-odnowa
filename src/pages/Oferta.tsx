import { useState } from "react";
import { FaUserGraduate, FaBrain, FaHandHoldingMedical, FaClipboardCheck } from "react-icons/fa";

const Offer = () => {
  const [activeTab, setActiveTab] = useState("psycholog");

  const tabs = [
    { id: "diagnoza", label: "Diagnoza ADOS-2", icon: <FaBrain size={22} /> },
    { id: "adhd", label: "Diagnoza ADHD", icon: <FaUserGraduate size={22} /> },
    { id: "psychologiczna", label: "Konsultacja psychologiczna", icon: <FaHandHoldingMedical size={22} /> },
    { id: "pedagogiczna", label: "Konsultacja pedagogiczna", icon: <FaClipboardCheck size={22} /> },
  ];

  const content = {
    diagnoza: (
      <div className="max-w-4xl mx-auto p-6">
  <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
    ADOS-2 (Autism Diagnostic Observation Schedule, Second Edition)
  </h2>

  <p className="text-gray-800 leading-relaxed mb-4">
    <span className="font-semibold text-green-700">ADOS-2</span> to wystandaryzowane narzędzie diagnostyczne służące do oceny funkcjonowania osoby pod kątem zaburzeń ze spektrum autyzmu (ASD). Jest ono uznawane za jeden z najważniejszych i najbardziej rzetelnych elementów procesu diagnostycznego na świecie.
  </p>

  <p className="text-gray-800 leading-relaxed mb-6">
    Badanie ADOS-2 polega na ustrukturyzowanej obserwacji zachowania osoby badanej w trakcie specjalnie dobranych zadań, zabaw i rozmów. Ich forma jest dostosowana do wieku, poziomu rozwoju oraz możliwości komunikacyjnych danej osoby — od małych dzieci po osoby dorosłe.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Co jest oceniane podczas badania?
  </h3>
  <p className="text-gray-800 leading-relaxed mb-3">
    W trakcie diagnozy psycholog zwraca szczególną uwagę na:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
    <li>sposób komunikacji werbalnej i niewerbalnej,</li>
    <li>jakość kontaktu społecznego i relacji z drugą osobą,</li>
    <li>umiejętność dzielenia uwagi i reagowania na emocje innych,</li>
    <li>wzorce zachowań, zainteresowań i aktywności,</li>
    <li>elastyczność myślenia oraz reakcje na zmiany.</li>
  </ul>
  <p className="text-gray-800 leading-relaxed mb-6">
    Badanie ma charakter interakcyjny i naturalny — nie jest testem „na wynik”, nie wymaga przygotowania ani udzielania „poprawnych odpowiedzi”. Celem jest jak najwierniejsze uchwycenie codziennego sposobu funkcjonowania osoby badanej.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Jak wygląda przebieg diagnozy ADOS-2?
  </h3>
  <p className="text-gray-800 leading-relaxed mb-6">
    Diagnoza przeprowadzana jest przez wykwalifikowanego psychologa posiadającego certyfikację <span className="font-semibold text-green-700">ADOS-2</span>. Spotkanie trwa zazwyczaj od 40 do 90 minut, w zależności od modułu badania. Po jego zakończeniu specjalista dokonuje szczegółowej analizy obserwowanych zachowań zgodnie z określonymi kryteriami. Wynik ADOS-2 nie stanowi samodzielnej diagnozy, lecz jest bardzo ważnym elementem całościowego procesu diagnostycznego, który obejmuje również wywiad kliniczny, analizę rozwoju oraz inne narzędzia psychologiczne.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Dlaczego warto wykonać badanie ADOS-2?
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>rzetelną i obiektywną ocenę funkcjonowania w obszarze spektrum autyzmu,</li>
    <li>lepsze zrozumienie trudności i mocnych stron danej osoby,</li>
    <li>postawienie trafnych rekomendacji terapeutycznych i edukacyjnych,</li>
    <li>wsparcie procesu diagnostycznego na każdym etapie życia.</li>
  </ul>

  <p className="text-gray-800 leading-relaxed">
    Badanie przeprowadzane jest w <span className="font-semibold text-green-700">bezpiecznej i przyjaznej atmosferze</span>, z poszanowaniem indywidualnych potrzeb osoby badanej.
  </p>
</div>

    ),
    adhd: (
      <div className="max-w-4xl mx-auto p-6">
  <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
    Na czym polega diagnoza ADHD?
  </h2>

  <p className="text-gray-800 leading-relaxed mb-4">
    Diagnoza <span className="font-semibold text-green-700">ADHD</span> (zespołu nadpobudliwości psychoruchowej z deficytem uwagi) to wieloetapowy proces, którego celem jest rzetelna ocena funkcjonowania osoby w obszarze uwagi, impulsywności oraz poziomu aktywności. W naszym gabinecie opiera się ona na szczegółowym wywiadzie klinicznym oraz standaryzowanych kwestionariuszach <span className="font-semibold">Connersa</span>.
  </p>

  <p className="text-gray-800 leading-relaxed mb-6">
    Takie połączenie pozwala spojrzeć na trudności w sposób całościowy — zarówno z perspektywy osoby badanej, jak i jej codziennego funkcjonowania w różnych środowiskach (np. w domu, szkole, pracy).
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Wywiad kliniczny – fundament diagnozy
  </h3>
  <p className="text-gray-800 leading-relaxed mb-3">
    Wywiad diagnostyczny to rozmowa prowadzona przez psychologa, która dotyczy m.in.:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
    <li>aktualnych trudności związanych z koncentracją, organizacją, impulsywnością,</li>
    <li>przebiegu rozwoju w dzieciństwie,</li>
    <li>funkcjonowania w szkole, pracy i relacjach,</li>
    <li>strategii radzenia sobie i mocnych stron,</li>
    <li>historii zdrowia psychicznego oraz sytuacji życiowej.</li>
  </ul>
  <p className="text-gray-800 leading-relaxed mb-6">
    Wywiad pozwala określić, od kiedy występują objawy, w jakich sytuacjach się nasilają oraz jaki mają wpływ na codzienne życie. Jest to kluczowy element różnicowania ADHD z innymi trudnościami, takimi jak zaburzenia lękowe, depresyjne czy problemy wynikające ze stresu.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Kwestionariusze Connersa – obiektywna ocena objawów
  </h3>
  <p className="text-gray-800 leading-relaxed mb-3">
    Skale <span className="font-semibold">Connersa</span> to uznane, wystandaryzowane narzędzia diagnostyczne stosowane w ocenie objawów ADHD u dzieci, młodzieży i dorosłych. Kwestionariusze wypełniane są — w zależności od wieku osoby badanej — przez:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
    <li>samą osobę badaną,</li>
    <li>rodzica lub opiekuna,</li>
    <li>nauczyciela lub inną osobę znającą dziecko w środowisku szkolnym.</li>
  </ul>
  <p className="text-gray-800 leading-relaxed mb-4">
    Pozwalają one ocenić m.in.:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>poziom nieuwagi,</li>
    <li>impulsywność i nadaktywność,</li>
    <li>trudności w kontroli emocji,</li>
    <li>funkcjonowanie społeczne i szkolne/zawodowe.</li>
  </ul>
  <p className="text-gray-800 leading-relaxed mb-6">
    Dzięki standaryzacji wyniki Connersa umożliwiają porównanie funkcjonowania osoby badanej z normami dla danej grupy wiekowej.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Jak wygląda przebieg diagnozy?
  </h3>
  <p className="text-gray-800 leading-relaxed mb-6">
    Proces diagnostyczny obejmuje jedno lub kilka spotkań z psychologiem. Po zebraniu wywiadu oraz analizie kwestionariuszy Connersa specjalista dokonuje całościowej oceny, uwzględniając obowiązujące kryteria diagnostyczne. Wynik diagnozy nie jest jedynie „etykietą” — stanowi punkt wyjścia do zrozumienia trudności, zaplanowania wsparcia oraz dobrania odpowiednich strategii terapeutycznych, edukacyjnych lub farmakologicznych (we współpracy z lekarzem psychiatrą).
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Dlaczego warto przeprowadzić diagnozę ADHD?
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>lepiej zrozumieć przyczyny trudności z koncentracją, organizacją i regulacją emocji,</li>
    <li>odróżnić ADHD od innych problemów o podobnych objawach,</li>
    <li>zaplanować skuteczne formy wsparcia i terapii,</li>
    <li>poprawić komfort codziennego funkcjonowania w szkole, pracy i relacjach.</li>
  </ul>
  <p className="text-gray-800 leading-relaxed mb-6">
    Cały proces odbywa się w bezpiecznej, życzliwej atmosferze, z uwzględnieniem indywidualnych potrzeb i doświadczeń osoby badanej.
  </p>
</div>

    ),
    psychologiczna: (
      <div className="max-w-4xl mx-auto p-6">
  <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
    Konsultacje psychologiczne – dla dzieci, młodzieży i dorosłych
  </h2>

  <p className="text-gray-800 leading-relaxed mb-4">
    <span className="font-semibold text-green-700">Konsultacje psychologiczne</span> to spotkania, których celem jest zrozumienie zgłaszanych trudności, określenie potrzeb oraz zaplanowanie odpowiedniego wsparcia. W pracy z dziećmi i młodzieżą proces ten wymaga czasu i obserwacji, dlatego zazwyczaj obejmuje kilka spotkań.
  </p>

  <p className="text-gray-800 leading-relaxed mb-6">
    Każda konsultacja odbywa się w <span className="font-semibold text-green-700">bezpiecznej, życzliwej atmosferze</span>, z poszanowaniem indywidualnej sytuacji i tempa osoby zgłaszającej się po pomoc.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Jak wygląda proces konsultacyjny u dzieci i młodzieży?
  </h3>
  <p className="text-gray-800 leading-relaxed mb-3">
    Aby móc wstępnie rozeznać się w sytuacji dziecka lub nastolatka, psycholog potrzebuje zazwyczaj 4–5 spotkań. Pozwala to na rzetelne poznanie trudności z różnych perspektyw oraz uniknięcie pochopnych wniosków.
  </p>

  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Pierwsze spotkanie – wywiad z rodzicami lub opiekunami, bez udziału dziecka (obowiązkowe w przypadku dzieci do 14. roku życia),</li>
    <li>Dwa lub trzy spotkania z dzieckiem lub nastolatkiem, w formie dostosowanej do wieku (rozmowa, obserwacja, praca zadaniowa, elementy zabawy),</li>
    <li>Spotkanie podsumowujące z rodzicami, podczas którego omawiane są obserwacje, wnioski oraz możliwe kierunki dalszego wsparcia.</li>
  </ul>

  <p className="text-gray-800 leading-relaxed mb-6">
    Taki układ spotkań pozwala spojrzeć na trudności dziecka całościowo — w kontekście emocjonalnym, rodzinnym i szkolnym.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Konsultacje psychologiczne dla dzieci
  </h3>
  <p className="text-gray-800 leading-relaxed mb-3">
    W przypadku dzieci do 14. roku życia:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
    <li>Pierwsze spotkanie zawsze odbywa się wyłącznie z rodzicami lub opiekunami,</li>
    <li>Ma ono formę szczegółowego wywiadu rozwojowego i rodzinnego,</li>
    <li>Dopiero po nim ustalany jest plan spotkań z dzieckiem.</li>
  </ul>

  <p className="text-gray-800 leading-relaxed mb-4 font-semibold">Zakres tematów konsultacji dziecięcych:</p>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Trudności wychowawcze,</li>
    <li>Radzenie sobie z emocjami u dzieci (złość, lęk, smutek, frustracja),</li>
    <li>Zaburzenia zachowania,</li>
    <li>Zaparcia nawykowe i inne trudności psychosomatyczne,</li>
    <li>Trudności szkolne (koncentracja, motywacja, relacje z nauczycielami),</li>
    <li>Trudności w relacjach z rówieśnikami,</li>
    <li>Zaburzenia nastroju u dzieci,</li>
    <li>Wsparcie dziecka i rodziny w procesie rozwodu lub rozstania rodziców,</li>
    <li>Pomoc w lepszym zrozumieniu potrzeb dziecka.</li>
  </ul>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Konsultacje dla rodziców i psychoedukacja
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Psychoedukacja dotycząca rozwoju emocjonalnego dziecka,</li>
    <li>Wsparcie w radzeniu sobie z trudnymi zachowaniami,</li>
    <li>Omówienie skutecznych strategii wychowawczych,</li>
    <li>Wzmocnienie kompetencji rodzicielskich,</li>
    <li>Pomoc w zrozumieniu sytuacji dziecka w kontekście rodzinnym.</li>
  </ul>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Konsultacje psychologiczne dla młodzieży
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Trudności emocjonalne i obniżony nastrój,</li>
    <li>Problemy w relacjach rówieśniczych,</li>
    <li>Stres szkolny i presja,</li>
    <li>Trudności adaptacyjne,</li>
    <li>Obniżone poczucie własnej wartości,</li>
    <li>Trudności rodzinne.</li>
  </ul>
  <p className="text-gray-800 leading-relaxed mb-6">
    W razie potrzeby proces obejmuje także współpracę z rodzicami lub opiekunami.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Konsultacje psychologiczne dla dorosłych
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Radzenie sobie z emocjami i stresem,</li>
    <li>Zaburzenia nastroju,</li>
    <li>Kryzysy życiowe i rodzinne,</li>
    <li>Problemy w relacjach,</li>
    <li>Trudności wychowawcze,</li>
    <li>Wsparcie w procesie rozwodu lub rozstania,</li>
    <li>Lepsze zrozumienie siebie i własnych reakcji.</li>
  </ul>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Cel konsultacji psychologicznych
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Rzetelne zrozumienie zgłaszanych trudności,</li>
    <li>Uważne przyjrzenie się funkcjonowaniu dziecka, młodej osoby lub dorosłego,</li>
    <li>Wspólne określenie dalszych kroków,</li>
    <li>Zaproponowanie adekwatnych form wsparcia.</li>
  </ul>
</div>

    ),
    pedagogiczna: (
      <div className="max-w-4xl mx-auto p-6">
  <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
    Konsultacje pedagogiczne z pedagogiem specjalnym
  </h2>

  <p className="text-gray-800 leading-relaxed mb-4">
    Masz wrażenie, że Twoje dziecko potrzebuje dodatkowego wsparcia?  
    Nie wiesz, jak pomóc mu w nauce, emocjach lub codziennym funkcjonowaniu?  
    Zapraszam na indywidualne konsultacje pedagogiczne w gabinecie, podczas których wspólnie znajdziemy najlepsze rozwiązania.
  </p>

  <p className="text-gray-800 leading-relaxed mb-6">
    Jako <span className="font-semibold text-green-700">pedagog specjalny</span> oferuję profesjonalne, a jednocześnie empatyczne wsparcie dzieci i rodziców. Każde spotkanie to czas poświęcony wyłącznie Twojemu dziecku i jego potrzebom.
  </p>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Zakres konsultacji obejmuje:
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Analizę trudności rozwojowych i edukacyjnych dziecka,</li>
    <li>Omówienie wyników badań i opinii (PPP, orzeczenia, zaświadczenia),</li>
    <li>Wskazówki do pracy w domu i w szkole,</li>
    <li>Dobór indywidualnych metod wsparcia,</li>
    <li>Pomoc w planowaniu terapii i oddziaływań specjalistycznych,</li>
    <li>Wsparcie rodziców w rozumieniu potrzeb dziecka.</li>
  </ul>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    W czym mogę pomóc?
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Trudności w nauce i koncentracji,</li>
    <li>Problemy szkolne i wychowawcze,</li>
    <li>Wsparcie dzieci z ADHD, ASD, dysleksją i innymi SPE,</li>
    <li>Omówienie diagnoz, opinii i orzeczeń,</li>
    <li>Konkretne wskazówki do pracy w domu i szkole.</li>
  </ul>

  <h3 className="text-xl font-semibold text-green-700 mb-3">
    Dlaczego warto?
  </h3>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Indywidualne podejście,</li>
    <li>Jasne i praktyczne rekomendacje,</li>
    <li>Bezpieczna, spokojna atmosfera,</li>
    <li>Realne wsparcie, a nie ogólne porady.</li>
  </ul>

  <p className="text-gray-800 leading-relaxed mb-4">
    Celem konsultacji jest lepsze zrozumienie dziecka, pomoc w codziennych wyzwaniach oraz wzmocnienie kompetencji rodziców.
  </p>

  <p className="text-gray-800 leading-relaxed">
    <span className="font-semibold text-green-700">Konsultacje stacjonarne w gabinecie.</span> Terminy ustalane indywidualnie.
  </p>
</div>

    ),
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      <h1 className="font-display text-4xl mb-8">Oferta</h1>
      <div className="max-w-4xl mx-auto p-6">
  <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
    Oferta konsultacji psychologicznych i pedagogicznych
  </h2>

  <p className="text-gray-800 leading-relaxed mb-4">
    Zapraszamy na <span className="font-semibold text-green-700">konsultacje psychologiczne i pedagogiczne</span> dla dzieci, młodzieży oraz dorosłych. Wspieramy osoby, które poszukują zrozumienia, pomocy i rzetelnej diagnozy w obszarze emocji, rozwoju, relacji oraz funkcjonowania w codziennym życiu.
  </p>

  <p className="text-gray-800 leading-relaxed mb-4">
    Pracujemy w oparciu o aktualną wiedzę, doświadczenie i <span className="font-semibold text-green-700">indywidualne podejście</span> do każdej osoby i każdej rodziny. Tworzymy bezpieczną, spokojną przestrzeń, w której można zatrzymać się, przyjrzeć trudnościom i wspólnie poszukać najlepszych rozwiązań.
  </p>

  <p className="text-gray-800 leading-relaxed mb-3 font-semibold">
    W naszej ofercie znajdują się m.in.:
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-6 space-y-1">
    <li>Konsultacje psychologa,</li>
    <li>Konsultacje pedagoga,</li>
    <li>Wsparcie dzieci, młodzieży i dorosłych,</li>
    <li>Pomoc dla rodziców i opiekunów.</li>
  </ul>

  <p className="text-gray-800 leading-relaxed mb-4">
    Na kolejnych zakładkach znajdą Państwo szczegółowe informacje dotyczące <span className="font-semibold text-green-700">diagnozy zaburzeń ze spektrum autyzmu (ADOS-2)</span>, <span className="font-semibold text-green-700">diagnozy ADHD</span>, a także opisy konsultacji psychologicznych i pedagogicznych — wraz z przebiegiem spotkań i zakresem możliwego wsparcia.
  </p>

  <p className="text-gray-800 leading-relaxed">
    Zapraszamy do zapoznania się z ofertą oraz do kontaktu — pierwsza rozmowa może być ważnym krokiem w stronę lepszego zrozumienia i otrzymania realnej pomocy.
  </p>
</div>


      {/* Tabs */}
      <div className="mt-8 flex justify-center flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-md transition transform duration-200
              ${
                activeTab === tab.id
                  ? "bgcard-gradient p-0 overflow-hidden rounded-2xl shadow-card border border-white/60"
                  : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200 hover:scale-105"
              }`}
          >
            {tab.icon}
            <span className="font-semibold text-lg">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        {content[activeTab]}
      </div>
    </div>
  );
};

export default Offer;
