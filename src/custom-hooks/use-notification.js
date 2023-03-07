import { useState, useEffect } from "react";

const useNotification = () => {
  const [notification, setNotification] = useState(false);

  const notificationHandler = () => {
    setNotification(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  }, [notification]);

  return { notification, onNoti: notificationHandler };
};

export default useNotification;
