import { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../UI/images/logo.png";

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const menuData = [
    ["Strona główna", "/strona-główna"],
    ["Oferta", "/oferta"],
    ["Aktualności", "/aktualności"],
    ["FAQ", "/faq"],
    ["Dekalog Ekokierowcy", "/dekalog-ekokierowcy"],
    ["Galeria", "/galeria"],
    ["Kontakt", "/kontakt"],
  ];

  return (
    <nav className="h-[80px] md:h-[90px] lg:h-[10vh] flex justify-between bg-white">
      <div className="h-[100%] ml-[20px] flex items-center justify-center z-30">
        <img src={logo} className="h-[80px] lg:h-[100px]" />
      </div>
      <ul
        className={`items-center gap-[20px] ${
          showMobileMenu
            ? "h-[100vh] fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center bg-orange z-20"
            : "hidden"
        } lg:h-[100%] lg:mr-[20px] lg:flex`}
      >
        {menuData.map(([title, url]) => (
          <li key={Math.floor(Math.random() * 10000)}>
            <NavLink
              to={url}
              className="p-[5px] text-[20px] text-white lg:text-[16px] lg:text-gray hover:text-orange transition ease-in-out duration-300"
              activeClassName="border-b-[3px] border-white lg:border-orange"
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="h-[100%] mr-[20px] flex items-center justify-center lg:hidden z-30">
        {!showMobileMenu && (
          <MenuIcon
            onClick={showMenuHandler}
            style={{ color: "#F58445", fontSize: "40px" }}
          />
        )}
        {showMobileMenu && (
          <CloseIcon
            onClick={showMenuHandler}
            style={{ color: "#ffffff", fontSize: "40px" }}
          />
        )}
      </div>
    </nav>
  );
};

export default Menu;

//Check if hover doesnt look bad on mobile
//Check if menu icon isnt to small on tablets(md)
