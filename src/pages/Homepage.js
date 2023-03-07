import useNotification from "../custom-hooks/use-notification";
import AnimationComponent from "../UI/AnimationComponent";
import { scaleVariant } from "../UI/animationVariants";
import { slideLeftVariant } from "../UI/animationVariants";
import { slideRightVariant } from "../UI/animationVariants";
import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import Banner from "../Components/homepage/Banner";
import Features from "../Components/homepage/Features";
import Notification from "../UI/Notification";
import Statistics from "../Components/homepage/Statistics";
import OfferCard from "../Components/OfferCard";
import Faq from "../Components/homepage/Faq";
import Footer from "../Components/Footer";

const Homepage = (props) => {
  const { notification: copyNotification, onNoti: onCopy } = useNotification();

  return (
    <>
      <header className="overflow-x-hidden">
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <Notification onShow={copyNotification} text={"Skopiowano do schowka"} />
      <Banner />
      <h2 className="section-title">
        Cechy naszych <span className="text-orange">kursów</span>
      </h2>
      <Features />
      <h2 className="section-title">
        O <span className="text-orange">nas</span>
      </h2>
      <AnimationComponent variant={scaleVariant}>
        <p className="w-[90%] md:w-[50%] customMargin text-center text-gray text-[18px] md:text-[20px]">
          Na przestrzeni lat udało nam się wyszkolić wielu kierowców. OSK
          Jedynka może pochwalić się wysoką zdawalnością egzaminów praktycznych
          jak i teoretycznych, za pierwszym razem. Uczestnicy naszych kursów
          mogą potwierdzić, że
          <span className="text-orange"> po nas nikt nie musi douczać</span>.
        </p>
      </AnimationComponent>
      <h2 className="section-title">
        Jedynka w <span className="text-orange">liczbach</span>
      </h2>
      <Statistics />
      <h2 className="section-title">
        Oferta <span className="text-orange">kursów</span>
      </h2>
      <section className="min-h-[100vh] md:w-[80%] md:min-h-[50vh] md:customMargin flex flex-col lg:flex-row items-center lg:justify-around gap-[50px] lg:gap-0 overflow-x-hidden">
        <OfferCard
          courseType={"weekendCourse"}
          animationVariant={slideLeftVariant}
        />
        <OfferCard
          courseType={"expressCourse"}
          animationVariant={slideRightVariant}
        />
      </section>
      <h2 className="section-title">
        Często zadawane <span className="text-orange">pytania</span>
      </h2>
      <Faq />
      <Footer copy={onCopy} />
    </>
  );
};

export default Homepage;
