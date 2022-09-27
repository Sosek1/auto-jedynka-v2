import useNotification from "../custom-hooks/use-notification";
import AnimationComponent from "../UI/AnimationComponent";
import { fadeVariant } from "../UI/animationVariants";

import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import CopyNotification from "../UI/CopyNotification";
import Footer from "../Components/Footer";

import image1 from "../UI/images/gallery1.jpg";
import image2 from "../UI/images/gallery2.jpg";
import image3 from "../UI/images/gallery3.jpg";
import image4 from "../UI/images/gallery4.jpg";

const Gallery = () => {
  const { copyNotification, onCopy } = useNotification();
  const images = [image1, image2, image3, image4];
  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <CopyNotification onShow={copyNotification} />
      <h2 className="section-title text-orange">Galeria</h2>
      <section className="w-[80vw] lg:w-[90vw] customMargin grid grid-rows-4 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-[10px]">
        {images.map((image) => (
          <AnimationComponent
            variant={fadeVariant}
            key={Math.floor(Math.random() * 10000)}
          >
            <img src={image} alt={"car"} className="w-[100%] h-[100%]" />
          </AnimationComponent>
        ))}
      </section>
      <Footer copy={onCopy} />
    </>
  );
};

export default Gallery;
