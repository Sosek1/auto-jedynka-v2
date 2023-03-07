import useNotification from "../custom-hooks/use-notification";
import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import Notification from "../UI/Notification";
import Footer from "../Components/Footer";
import PostsList from "../Components/news/PostsList";

const News = () => {
  const { notification: copyNotification, onNoti: onCopy } = useNotification();

  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <Notification onShow={copyNotification} text={"Skopiowano do schowka"} />
      <h2 className="section-title text-orange">Aktualności</h2>
      <PostsList />
      <Footer copy={onCopy} />
    </>
  );
};

export default News;
