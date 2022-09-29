import useNotification from "../custom-hooks/use-notification";

import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import CopyNotification from "../UI/CopyNotification";
import Post from "../Components/news/Post";
import Footer from "../Components/Footer";
import PostsList from "../Components/news/PostsList";

const News = () => {
  const { copyNotification, onCopy } = useNotification();
  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <CopyNotification onShow={copyNotification} />
      <h2 className="section-title text-orange">Aktualności</h2>
      {/* <PostsList /> */}
      <Footer copy={onCopy} />
    </>
  );
};

export default News;
