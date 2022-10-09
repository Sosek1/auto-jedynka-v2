import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [showMobileMenu]);

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
    <nav
      className={`h-[80px] lg:h-[100px] max-w-[100vw] md:h-[90px] lg:h-[10vh] relative lg:static lg:flex justify-between bg-`}
    >
      <div className="h-[100%] top-[50%] translate-y-[-50%] lg:translate-y-0 left-0 absolute lg:static lg:ml-[20px] flex items-center justify-center z-30">
        <Link to="/strona-główna">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="autojedynka logo"
            className="h-[70px] lg:h-[90px]"
          />
        </Link>
      </div>
      <ul
        className={`h-[100vh] lg:h-[100%] w-[100%] fixed left-[100%] lg:overflow-x-hidden lg:mr-[20px] lg:static flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-[20px] transition-all duration-500 ease-out bg-orange lg:bg-white z-20 ${
          showMobileMenu ? "left-[0%] scroll-no " : ""
        }`}
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
      <div className="h-[100%] absolute right-0 mr-[20px] flex items-center justify-center lg:hidden z-30">
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
