import { useState, useEffect } from "react";

const useNotification = () => {
  const [copyNotification, setCopyNotification] = useState(false);
  const copyNotificationHandler = () => {
    setCopyNotification(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setCopyNotification(false);
    }, 3000);
  }, [copyNotification]);

  return { copyNotification, onCopy: copyNotificationHandler };
};

export default useNotification;
