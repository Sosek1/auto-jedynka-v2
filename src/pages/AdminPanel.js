import { useState } from "react";
import Notification from "../UI/Notification";
import useNotification from "../custom-hooks/use-notification";
import AdminMenu from "../Components/admin/AdminMenu";
import AdminPhotoUpload from "../Components/admin/AdminPhotoUpload";
import AdminPostsForm from "../Components/admin/AdminPostsForm";
import AdminPrices from "../Components/admin/AdminPrices";
import AdminMenagePhotos from "../Components/admin/AdminMenagePhotos";
import AdminMenagePosts from "../Components/admin/AdminMenagePosts";
import { AdminContextProvider } from "../store/admin-context";

const AdminPanel = () => {
  const [notificationState, setNotificationState] = useState("");
  const { notification, onNoti } = useNotification();

  return (
    <>
      <AdminMenu />
      <Notification onShow={notification} text={notificationState} />
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
      <AdminContextProvider>
        <AdminPostsForm
          noti={onNoti}
          text={() => setNotificationState("Dodano aktualność")}
        />
        <h2 className="section-title">
          Usuwanie <span className="text-orange">artykułów</span>
        </h2>
        <AdminMenagePosts
          noti={onNoti}
          text={() => setNotificationState("Usunięto aktualność")}
        />
        <h2 className="section-title">
          Dodawanie <span className="text-orange">zdjęć</span>
        </h2>
        <AdminPhotoUpload
          noti={onNoti}
          text={(notificationText) => setNotificationState(notificationText)}
        />
        <h2 className="section-title">
          Usuwanie <span className="text-orange">zdjęć</span>
        </h2>
        <AdminMenagePhotos
          noti={onNoti}
          text={() => setNotificationState("Usunięto zdjęcie")}
        />
      </AdminContextProvider>
    </>
  );
};

export default AdminPanel;
