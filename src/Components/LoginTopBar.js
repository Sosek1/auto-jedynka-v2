import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const LoginTopBar = () => {
  return (
    <div className="h-[80px] lg:h-[100px] w-[100%] md:h-[90px] lg:h-[10vh] pl-[10px] pr-[20px] flex justify-between items-center bg-white">
      <Link to="/strona-główna">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="autojedynka logo"
          className="h-[70px] lg:h-[90px]"
        />
      </Link>
      <div className="flex items-center justify-center">
        <LogoutIcon style={{ color: "#F58445", fontSize: "30px" }}></LogoutIcon>
        <Link
          to="/"
          className="ml-[10px] text-16px md:text-[18px] text-black font-light cursor-pointer"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
};

export default LoginTopBar;
