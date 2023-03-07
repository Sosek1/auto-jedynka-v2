import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import useNotification from "../custom-hooks/use-notification";
import AnimationComponent from "../UI/AnimationComponent";
import { fadeVariant } from "../UI/animationVariants";
import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import Notification from "../UI/Notification";
import Footer from "../Components/Footer";
import LoadingSpinner from "../UI/LoadingSpinner";

const Gallery = () => {
  const { notification: copyNotification, onNoti: onCopy } = useNotification();
  const [imagesList, setImagesList] = useState([]);

  const imagesListRef = ref(storage, "Gallery/");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagesList((prev) => [url, ...prev]);
        });
      });
    });
    console.log(imagesList);
  }, []);

  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <Notification onShow={copyNotification} text={"Skopiowano do schowka"} />
      <h2 className="section-title text-orange">Galeria</h2>
      <section className="min-h-[30vh] w-[80vw] md:w-[60vw] lg:w-[70vw] mb-[50px] customMargin md:mb-[50px] grid grid-rows-4 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-[10px]">
        {imagesList.length !== 0 ? (
          imagesList.map((url) => (
            <AnimationComponent
              variant={fadeVariant}
              key={Math.floor(Math.random() * 10000)}
            >
              <img
                src={url}
                alt={"car image"}
                className="w-[100%] h-[250px] md:h-[400px] xl:h-[450px] object-fill"
              />
            </AnimationComponent>
          ))
        ) : (
          <div className="w-[100%] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
      </section>
      <Footer copy={onCopy} />
    </>
  );
};

export default Gallery;
