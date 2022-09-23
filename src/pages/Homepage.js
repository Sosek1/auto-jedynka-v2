import { useState, useEffect } from "react";

import { TopBar } from "../Components/TopBar";
import { Menu } from "../Components/Menu";
import { Banner } from "../Components/Banner";
import { CopyNotification } from "../UI/CopyNotification";
export const Homepage = (props) => {
  const [copyNotification, setCopyNotification] = useState(false);

  const copyNotificationHandler = () => {
    setCopyNotification(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyNotification(false);
    }, 1000);
  }, [copyNotification]);
  return (
    <>
      <header>
        <TopBar copy={copyNotificationHandler} />
        <Menu />
      </header>
      {copyNotification && <CopyNotification />}
      <Banner />
    </>
  );
};
