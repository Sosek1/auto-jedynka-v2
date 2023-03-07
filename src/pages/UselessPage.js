import useNotification from "../custom-hooks/use-notification";
import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import Notification from "../UI/Notification";
import Footer from "../Components/Footer";

const UselessPage = () => {
  const { notification: copyNotification, onNoti: onCopy } = useNotification();

  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <Notification onShow={copyNotification} text={"Skopiowano do schowka"} />
      <h1 className="section-title">
        Dekalog <span className="text-orange">EkoKierowcy</span>
      </h1>
      <section className="w-[90vw] lg:w-[70vw] mb-50[px] customMargin md:mb-[50px]">
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Bądź świadomym ekokierowcą
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Kontroluj spalanie. Tylko regularna kontrola poziomu spalania pozwoli
          Ci z jednej strony doskonalić swój sposób jazdy, a z drugiej szybko
          zorientować się, gdy coś zaczyna szwankować w samochodzie. Postaraj
          się zapisywać swoje średnie spalanie oraz rzucać sobie wyzwania
          obniżenia go. Zmniejszenie spalania paliwa o 1,5 litra na 100 km.
          pozwoli Ci zaoszczędzić około 180 litrów paliwa rocznie (przy
          szacowanym przebiegu 12000 km) to około 720 zł. Wiesz już na co je
          wydasz ?
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Nie szarżuj
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Najbardziej ekonomiczna jest prędkość stała na jak najwyższym biegu
          przy maksymalnie 2500 obrotów na minutę (samochody benzynowe).
          Generalnie można stwierdzić, że jest to około 80-100 km/h. Przy
          wysokich prędkościach duże znaczenie pod względem spalania ma opór
          aerodynamiczny. Opór jest proporcjonalny do kwadratu prędkości, co
          oznacza, dwukrotny wzrost prędkości powoduje czterokrotny wzrost oporu
          powietrza. Szacuje się, że jadąc z prędkością 120 km/h zużywa się 30%
          więcej paliwa niż jadąc z prędkością 80 km/h. Jadąc z prędkością 140
          km/h zużywa się o 20% więcej paliwa niż jadąc z prędkością 120 km/h.
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Nie dociążaj samochodu (również aerodynamicznie)
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Każde dodatkowe 10 kg w samochodzie to nie mniej niż 0,1 litra na 100
          km. Zastanów się więc czy jest sens wozić przez cały rok łańcuchy
          zimowe, łopatę do śniegu, stare gazety, skrzynkę butelek po piwie, czy
          cokolwiek innego tam wozisz. Nie woź tego czego na pewno nie będziesz
          potrzebował. Pamiętaj, że wszystkie dodatkowe elementy, które
          domontujesz do samochodu, takie jak bagażniki dachowe, rowerowe, duże
          anteny, a nawet zawieszone na nich flagi negatywnie wpłyną na zużycie
          paliwa z uwagi na zwiększanie oporu powietrza.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px]">
          Szacuje się, że bagażnik dachowy przy prędkości 120 km/h zwiększy
          zużycie paliwa o około 20%. Podobnie zadziałają otwarte szyby przy
          większej prędkości. Zrezygnuj również z owiewek okiennych, wbrew
          pozorom negatywnie wpływają one na opór powietrza z uwagi na
          powiększanie powierzchni czołowej auta. (Oczywiście pamiętaj, że przy
          wyższych prędkościach jeździmy z zamkniętymi szybami, nawet kosztem
          włączenia klimatyzacji).
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Utrzymuj samochód w dobrym stanie
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Pamiętaj o tym, że stan techniczny Twojego samochodu znacząco wpływa
          na zużycie paliwa. Pamiętaj o regularnej wymianie filtrów – paliwa i
          powietrza. Dbaj o właściwą geometrię zawieszenia. Pamiętaj o
          regularnym (przynajmniej raz w miesiącu!) sprawdzaniu ciśnienia w
          oponach.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Spadek ciśnienia w oponach o 25% zwiększa opór toczenia o 10%, co
          przekłada się na 2% wzrost zużycia paliwa. Większość z nas jeździ na
          niedopompowanych oponach, tymczasem weryfikacja i doprowadzenie do
          stanu idealnego może zostać wykonana na większości stacji paliw za
          darmo.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Pamiętaj również o tym, że również rodzaj opon wpływa na opory
          toczenia oraz zużycie paliwa. Generalną zasadą jest, że szersze,
          bardziej sportowe opony przełożą się na wzrost zużycia paliwa.
          Współczynnik toczenia podawany jest przez producentów większości opon
          dostępnych na rynku.
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Unikaj gwałtownego ruszania i hamowania
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Gwałtowne ruszanie i hamowanie znacznie wpływa na Twoje wydatki na
          stacji benzynowej. Mądrzejsze posługiwanie się pedałem gazu i hamulca
          może zmniejszyć zużycie paliwa nawet do 25%. Kilka sekund jazdy na
          najwyższych obrotach może równać się nawet kilku minutom spokojnego
          naciskania na pedał gazu.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">Pamiętaj:</p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          1) rozpędzanie pojazdu zużywa dużo więcej paliwa niż utrzymywanie
          stałej prędkości. Do równomiernej jazdy z prędkością 50km/h samochód
          wykorzystuje jedynie 5kW mocy (25 kW przy prędkości 120 km/h)
          pozostała moc silnika wykorzystywana jest tylko podczas przyspieszania
          oraz jazdy z dużą prędkością.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          2) Przyspieszenie ze startu zatrzymanego wymaga o 20% więcej energii
          niż w przypadku przyspieszania choćby ledwo toczącego się samochodu.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          3) I bieg służy do ruszania. Nie przejeżdżaj na nim więcej niż 2
          długości samochodu, gdyż jest najmniej efektywny pod względem stosunku
          wysokości obrotów silnika do ilości przejechanych metrów.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          4) Jedź samochodem tak jakbyś jechał rowerem. Jadąc rowerem szanujesz
          pracę swoich mięśni. Widząc przed sobą czerwone światło lub inną
          przeszkodę nie przyspieszasz, aby znaleźć się przy niej wcześniej i
          gwałtownie zahamować, lecz spokojnie do niej dojeżdżasz najchętniej
          wykorzystując swobodne toczenie się. Pomyśl, że obroty silnika są jak
          Twoje pedałowanie na rowerze, to naprawdę dużo zmienia.
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Zmieniaj bieg na wyższy
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Samochody konstruuje się tak, by niższe biegi zapewniały największą
          moc i pozwalały na lepsze przyspieszenia, jednak oznacza to także
          najwyższe zużycie paliwa przez silnik samochodu. Poruszając się na
          najwyższych biegach, pozwalamy silnikowi zejść na niższe obroty, które
          nie tylko oszczędzają paliwo, ale także mniej zużywają jednostkę
          napędową oraz pozwalają na zmniejszenie emisji CO2.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          W przypadku samochodów na benzynę (oraz gaz) najbardziej optymalnie
          wykorzystujemy pracę silnika zmieniając bieg na wyższy przy
          osiągnięciu maksymalnie 2500 RPM, w przypadku silników diesla zaleca
          się zmianę biegu na wyższy przy osiągnięciu maksymalnie 2000 RPM.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Oczywiście zalecane wartości są podane orientacyjnie i chociaż
          zazwyczaj nie odbiegają znacznie to są zależne od specyfiki
          konkretnego silnika, czy też warunków drogowych. Szczegółowe zalecenia
          zazwyczaj znajdują się w instrukcji obsługi pojazdu.
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Wyłącz silnik, gdy czekasz
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          W zasadzie przy każdym postoju dłuższym niż 30 sekund bardziej
          ekonomicznym rozwiązaniem jest zgasić silnik, niż czekać przy
          włączonym. Oczywiście rzadko powinniśmy to robić w zwykłym ruchu
          miejskim, ale już podczas oczekiwania na przejazd pociągu, lub też
          czekając na pasażera warto jest zgasić silnik. Silnik pracujący na
          biegu jałowym przez 3 minuty zużyje ilość paliwa wystarczającą na
          przejechanie 1 km z prędkością około 50 km/h Przy odpalaniu samochodu
          nie wciskaj pedału gazu! Silniki konstruowane są w taki sposób aby
          odpalały bez konieczności wciśnięcia pedału gazu. Nie zużywaj więc
          niepotrzebnie paliwa, tym bardziej, że wciśnięcie gazu prędzej zakłóci
          pracę systemu paliwowego niż mu pomoże. Powiązane gdy odpalisz to jedź
          nie grzej silnika na luzie.
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Hamuj silnikiem, nie jedź “na luzie”
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Biorąc pod uwagę popularność jazdy na luzie na polskich drogach wciąż
          tkwimy w latach 70-tych lub maksymalnie 80-tych. Tymczasem znakomita
          większość samochodów produkowanych po roku 1990-tym to samochody
          wyposażone we wtrysk paliwa oraz odcięcie dopływu paliwa w trakcie
          hamowania silnikiem (całkowite zwolnienie pedału gazu i jazda na
          biegu). Oznacza to tyle, że w trakcie hamowania silnikiem spalanie
          wynosi ZERO! Dzieje się tak aż do momentu w którym silnik osiągnie
          około 1300 obrotów. Wówczas paliwo na nowo zaczyna płynąć do silnika
          aby zapobiec jego zgaśnięciu. Idealnym więc sposobem jazdy jest
          przewidywanie sytuacji na drodze i zwalnianie pedału gazu w
          odpowiednim momencie. Np. podczas dojeżdżania do czerwonego światła
          dobrze jest zawczasu zdjąć nogę z gazu i stopniowo redukować biegi,
          gdy obroty silnika dochodzą do 1300. Oszczędność wynika stąd, że
          dopływ paliwa jest odcinany od silnika i porusza się on będąc
          napędzany przez koła. Nie dzieje się tak podczas jazdy „na luzie”.
          Silnik nie jest wówczas napędzany przez koła i niepotrzebnie zużywa
          paliwo aby utrzymywać swój ruch. Hamowanie silnikiem przyczyni się
          również do większych oszczędności na elementach układu hamulcowego
          takich jak klocki, czy też tarcze.
        </p>
        <h2 className="mb-[20px] text-[25px] md:text-[30px]  font-medium">
          Mądrze korzystaj z klimatyzacji i ogrzewania
        </h2>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Wiele osób zdaje sobie sprawę z tego, że klimatyzacja zużywa paliwo,
          redukując zasięg samochodu nawet o 20%, jednak niewiele osób zdaje
          sobie sprawę z tego, że jadąc z otwartymi szybami zwiększamy opór
          powietrza i również podnosimy poziom spalania.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Generalną zasadą jest, że przy jeździe do prędkości 50 km/h bardziej
          ekonomicznym rozwiązaniem jest otworzenie okien, natomiast powyżej
          prędkości 50 km/h bardziej ekonomiczne jest włączenie klimatyzacji.
          Warto także pamiętać, żeby podczas największych letnich upałów, jadąc
          z klimatyzacją włączyć „zamknięty obieg powietrza”, gdyż wtedy
          klimatyzacja oszczędza energię schładzając już raz schłodzone
          powietrze, a nie gorące pobierane z zewnątrz.
        </p>
        <p className="mb-[20px] text-[16px] md:text-[18px] ">
          Zimą, gdy wsiadasz do zimnego samochodu przejedź pierwsze parę
          kilometrów z wyłączonym ogrzewaniem. Pozwoli to silnikowi szybciej
          osiągnąć odpowiednią temperaturę, a Ty właściwie i tak nie odczujesz
          różnicy.
        </p>
      </section>
      <Footer copy={onCopy} />
    </>
  );
};

export default UselessPage;
