import AdminMenu from "./AdminMenu";
import AdminPostsForm from "./AdminPostsForm";
import AdminPrices from "./AdminPrices";

const AdminStart = () => {
  return (
    <>
      <AdminMenu />
      <h2 className="section-title">
        Obecne ceny <span className="text-orange">kursów</span>
      </h2>
      <AdminPrices />
      <h2 className="section-title">
        Dodawanie <span className="text-orange"> aktualności</span>
      </h2>
      <AdminPostsForm />
    </>
  );
};

export default AdminStart;
