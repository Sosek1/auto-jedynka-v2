import { useState } from "react";
import CopyNotification from "../../UI/Notification";
import useNotification from "../../custom-hooks/use-notification";
import AdminMenu from "./AdminMenu";
import AdminPhotoUpload from "./AdminPhotoUpload";
import AdminPostsForm from "./AdminPostsForm";
import AdminPrices from "./AdminPrices";

const AdminStart = () => {
  const [notificationState, setNotificationState] = useState("");
  const { notification, onNoti } = useNotification();

  return (
    <>
      <AdminMenu />
      <CopyNotification onShow={notification} text={notificationState} />
      <h2 className="section-title">
        Obecne ceny <span className="text-orange">kursów</span>
      </h2>
      <AdminPrices
        noti={onNoti}
        text={() => setNotificationState("Zmieniono ceny")}
      />
      <h2 className="section-title">
        Dodawanie <span className="text-orange"> aktualności</span>
      </h2>
      <AdminPostsForm
        noti={onNoti}
        text={() => setNotificationState("Dodano aktualność")}
      />
      <h2 className="section-title">
        Dodawanie <span className="text-orange">zdjęć</span>
      </h2>
      <AdminPhotoUpload
        noti={onNoti}
        text={() => setNotificationState("Dodano zdjęcie")}
      />
    </>
  );
};

export default AdminStart;
