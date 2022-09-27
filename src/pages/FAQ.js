import useNotification from "../custom-hooks/use-notification";

import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import CopyNotification from "../UI/CopyNotification";
import Footer from "../Components/Footer";

const FAQ = () => {
  const { copyNotification, onCopy } = useNotification();

  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <CopyNotification onShow={copyNotification} />
      <h1 className="section-title">
        Często zadawane <span className="text-orange">pytania</span>
      </h1>
      <section className="w-[90vw] lg:w-[70vw] customMargin">
        <h3 className="mb-[10px] text-[25px] md:text-[30px] ">
          1. Co jest potrzebne do rozpoczęcia kursu jazdy ?
        </h3>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Przed rozpoczęciem kursu jazdy nazleży wyrobić
          <span className="text-orange">
            {" "}
            Profil Kandydata na Kierowcę(PPK)
          </span>
          . Profil daje możliwość szkolenia w dowolnej szkole nauki jazdy i
          zdawania egzaminów państwowych na terenie całej Polski.
        </p>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          2. Gdzie wyrobić Profil Kandydata na Kierowcę ?
        </h3>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Profil Kandydata na Kierowce można wyrobić w placówkach Urzędu Miasta
          lub Gminy. Istnieje również możliwość wyrobienia PPK{" "}
          <span className="text-orange">online</span>.
        </p>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          3. Co jest potrzebne do wyrobienia PPK ?
        </h3>
        <ul>
          <li className="mb-[10px] text-[16px] md:text-[18px]">
            - dowód osobisty/ paszport/ legitymacja szkolna
          </li>
          <li className="mb-[10px] text-[16px] md:text-[18px]">
            - wniosek o wydanie prawa jazdy
          </li>
          <li className="mb-[10px] text-[16px] md:text-[18px]">
            - pisemna zgoda rodziców, dla osób niepełnoletnich
          </li>
          <li className="mb-[10px] text-[16px] md:text-[18px]">
            - orzeczenie lekarskie wydane przez lekarza uprawnionego do badania
            kierowców na kategorię, na którą zamierzamy rozpocząć kurs
          </li>
          <li className="mb-[10px] text-[16px] md:text-[18px]">
            - zdjęcie 3,5cm x 4,5cm
          </li>
        </ul>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          4. W jakim wieku można rozpocząć kurs nauki jazdy kategorii B ?
        </h3>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Dla kategorii B minimalny wiek to
          <span className="text-orange"> 17 lat i 9 miesięcy</span>
        </p>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          5. Ile Trwa kurs prawa jazdy? Ile trwają wykłady, a ile jazdy?
        </h3>
        <ul>
          <li className="mb-[10px] text-[16px] md:text-[18px]">
            Kursy <span className="text-orange">weekendowe</span> trwają
            średnio, każda lekcja teorii ma 45 minut, terminy i długość jazd są
            ustalane indywiduanie.
          </li>
          <li className="mb-[10px] text-[16px] md:text-[18px]">
            Kursy <span className="text-orange">ekspresowe</span> trwają 18 dni.
          </li>
        </ul>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          6. Jak przebiega nauka teorii?
        </h3>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Na każdym 45 minutowym wykładzie, omawiamy zasady ruchu drogowego, na
          podstawie filmów, plansz oraz czynnej dyskusji, uczymy również
          pierwszej pomocy. Po zakończeniu teoretycznej części kursu
          organizujemy <span className="text-orange">egzaminy wewnętrzne</span>.
        </p>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          7. Jak przebiegają jazdy ?
        </h3>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          W trakcie jazd zwracamy szczególną uwagę na{" "}
          <span className="text-orange">bezpieczeństwo</span>. Staramy się
          również nie wywierać <span className="text-orange">presji</span> na
          kursantach. Nasze jazdy przebiegają w spokojnej, miłej atmosferze. Z
          nami bez problemowo opanujesz wszystkie manewry potrzebne do zdania
          egzaminu i będziesz potrafił jezdzić samochodem.
        </p>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          8. Czy można dokupić dodatkowe godziny po zakończeniu kursu ?
        </h3>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Tak, oferujemy jazdy doszkalające. Kosztują{" "}
          <span className="text-orange">80</span> złotych za godzinę.
        </p>
        <h3 className="mb-[10px] text-[25px] md:text-[30px]">
          9. Gdzie zrobić badania lekarskie potrzebne do wyrobienia PPK ?
        </h3>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Badania lekarskie dla kandydatów na kierowców: Lek.med. Tomasz
          Zwinczak ul. Majora Henryka Sucharskiego 6 Dr Teresa Leń ul. Księdza
          Jerzego Popieuszki 42a
        </p>
      </section>
      <Footer copy={onCopy} />
    </>
  );
};

export default FAQ;
