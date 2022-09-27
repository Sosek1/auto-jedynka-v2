import useNotification from "../custom-hooks/use-notification";
import AnimationComponent from "../UI/AnimationComponent";
import { scaleVariant } from "../UI/animationVariants";
import { slideLeftVariant } from "../UI/animationVariants";
import { slideRightVariant } from "../UI/animationVariants";
import { slideBottomVariant } from "../UI/animationVariants";

import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import CopyNotification from "../UI/CopyNotification";
import OfferCard from "../Components/OfferCard";
import Footer from "../Components/Footer";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import TimeToLeaveRoundedIcon from "@mui/icons-material/TimeToLeaveRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const Offer = () => {
  const { copyNotification, onCopy } = useNotification();

  const icons = [
    [
      <PersonAddAltRoundedIcon
        style={{ fontSize: "50px", color: "#F58445" }}
      />,
      "border-2 border-orange",
    ],
    [
      <ArrowRightAltRoundedIcon
        style={{ fontSize: "50px", color: "#F58445" }}
      />,
      "",
    ],
    [
      <LocalLibraryRoundedIcon
        style={{ fontSize: "50px", color: "#F58445" }}
      />,
      "border-2 border-orange",
    ],
    [
      <ArrowRightAltRoundedIcon
        style={{ fontSize: "50px", color: "#F58445" }}
      />,
      "",
    ],
    [
      <TimeToLeaveRoundedIcon style={{ fontSize: "50px", color: "#F58445" }} />,
      "border-2 border-orange",
    ],
    [
      <ArrowRightAltRoundedIcon
        style={{ fontSize: "50px", color: "#F58445" }}
      />,
      "",
    ],
    [
      <SchoolRoundedIcon style={{ fontSize: "50px", color: "#F58445" }} />,
      "border-2 border-orange",
    ],
  ];

  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <CopyNotification onShow={copyNotification} />
      <h2 className="section-title">
        Oferujemy kursy prawa jazdy
        <span className="text-orange">
          {" "}
          kategorii <span className="hidden md:inline-block">B</span>
        </span>
      </h2>
      <div className="w-[80px] h-[80px] md:hidden customMargin flex justify-center items-center border-2 border-orange rounded-full text-[60px] font-light text-orange">
        B
      </div>
      <section className="h-[20vh] md:m-x-[20px] hidden md:flex items-center justify-around">
        {icons.map(([icon, style]) => (
          <AnimationComponent
            variant={scaleVariant}
            key={Math.floor(Math.random() * 10000)}
            class={`w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] flex items-center justify-center ${style} rounded-full`}
          >
            {icon}
          </AnimationComponent>
        ))}
      </section>
      <h2 className="section-title">
        Część
        <span className="text-orange"> teoretyczna</span>
      </h2>
      <AnimationComponent variant={slideBottomVariant}>
        <p className="w-[90%] md-[w-80%] xl:w-[70%] text-[18px] lg:text-[20px] customMargin text-center">
          Część teoretyczna naszego kursu składa się z
          <span className="font-semibold"> 30 spotkań</span>. Na każdym
          <span className="font-semibold"> 45 minutowym </span>
          wykładzie, omawiamy zasady ruchu drogowego, na podstawie filmów,
          plansz oraz czynnej dyskusji, uczymy również pierwszej pomocy.
          Spotkania odbywają się na ul.
          <span className="font-semibold"> Aleja Pokoju 5a </span> w piątki
          soboty i niedziele. Po zakończniu części teoretycznej organizujemy
          testy wewnętrzne.
        </p>
      </AnimationComponent>
      <h2 className="section-title">
        Część
        <span className="text-orange"> praktyczna</span>
      </h2>
      <AnimationComponent variant={slideBottomVariant}>
        <p className="w-[90%] md-[w-80%] xl:w-[70%] text-[18px] lg:text-[20px] customMargin text-center">
          Część praktyczna naszego kursu to
          <span className="font-semibold"> 30 godzin jazdy </span>30 godzin
          jazdy, zarówno na
          <span className="font-semibold"> placu manewrowym </span> jak i w
          <span className="font-semibold"> mieście </span>, w trakcie których
          nauczysz się swobodnie i bezpiecznie jezdzić samochodem. Dzięki
          naszemu szkoleniu bez problemu wykonasz wszystkie manwery, które
          musisz umieć aby zdać egzamin. Jazdy odbywają się w
          <span className="font-semibold"> Hyundaiu i20</span>, samochodzie, w
          którym najprawdopodobniej będziesz zdawał/zdawała swój egazmin.
        </p>
      </AnimationComponent>
      <h2 className="section-title">
        Cennik
        <span className="text-orange"> kursów</span>
      </h2>
      <section className="min-h-[100vh] md:w-[80%] md:min-h-[50vh] md:customMargin flex flex-col lg:flex-row items-center lg:justify-around gap-[50px] lg:gap-0">
        <OfferCard
          courseType={"weekendCourse"}
          animationVariant={slideLeftVariant}
        />
        <OfferCard
          courseType={"expressCourse"}
          animationVariant={slideRightVariant}
        />
      </section>
      <Footer copy={onCopy} />
    </>
  );
};

export default Offer;
