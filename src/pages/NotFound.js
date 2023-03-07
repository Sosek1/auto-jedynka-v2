import useNotification from "../custom-hooks/use-notification";

import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import Notification from "../UI/Notification";
import Post from "../Components/news/Post";
import Footer from "../Components/Footer";

const NotFound = () => {
  const { copyNotification, onCopy } = useNotification();

  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <Notification onShow={copyNotification} />
      <section className="h-[20vh] md:h-[40vh] flex items-center justify-center">
        <h2 className="section-title text-orange">Nie znaleziono strony</h2>
      </section>
      <Footer copy={onCopy} />
    </>
  );
};

export default NotFound;
