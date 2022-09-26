import { useState, useEffect } from "react";

const useNotification = () => {
  const [copyNotification, setCopyNotification] = useState(false);
  const copyNotificationHandler = () => {
    setCopyNotification(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setCopyNotification(false);
    }, 1000);
  }, [copyNotification]);

  return { copyNotification, onCopy: copyNotificationHandler };
};

export default useNotification;
