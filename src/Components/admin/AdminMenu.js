import LogoutIcon from "@mui/icons-material/Logout";

const AdminMenu = () => {
  return (
    <nav className="h-[80px] lg:h-[100px] md:h-[90px] lg:h-[10vh] flex justify-between bg-orange">
      <div className="h-[100%] ml-[20px] flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="autojedynka logo"
          className="h-[70px] lg:h-[90px]"
        />
      </div>
      <div className="h-[100%] mr-[20px] flex items-center ">
        <LogoutIcon style={{ color: "#ffffff", fontSize: "30px" }} />
        <p className="ml-[20px] text-16px md:text-[18px] text-white font-light cursor-pointer">
          Wyloguj się
        </p>
      </div>
    </nav>
  );
};

export default AdminMenu;
