import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Footer = (props) => {
  const menuData = [
    ["Strona główna", "/strona-główna"],
    ["Oferta", "/oferta"],
    ["Aktualności", "/aktualności"],
    ["FAQ", "faq"],
    ["Dekalog Ekokierowcy", "/dekalog-ekokierowcy"],
    ["Galeria", "/galeria"],
    ["Kontakt", "/kontakt"],
  ];

  return (
    <footer className="flex md:grid grid-cols-[2fr,1.5fr,1fr] md:grid-cols-[1.5fr,1.5fr,1fr] grid-rows-[4fr,1fr] flex-col bg-gray">
      <section className="mt-[20px] md:ml-[20px] lg:ml-[40px] hidden md:flex flex-col items-start">
        <h2 className="font-light text-[25px] text-white border-b-[2px] border-orange">
          Auto Jedynka
        </h2>
        <p className="w-[70%] mt-[20px] text-[18px] text-white font-light">
          Ośrodek szkolenia kierowców działający w Krakowie już od 13 lat.
          Zdobywca pierwszego miejsca w rankingu szkół nauki jazdy w Krakowie w
          2014 roku.
        </p>
        <h2 className="mt-[20px] font-light text-[25px] text-white">
          <span className="text-orange">Napisz</span> do nas
        </h2>
        <div className="flex mt-[20px]">
          <p className="h-[40px] px-[20px] py-[10px] bg-white text-center text-black select-orange">
            autojedynka@gmail.com
          </p>
          <CopyToClipboard text="autojedynka@gmail.com" onCopy={props.copy}>
            <div className="h-[40px] w-[40px] flex items-center justify-center bg-orange cursor-copy">
              <ContentCopyIcon style={{ fontSize: "20px", color: "#fff" }} />
            </div>
          </CopyToClipboard>
        </div>
      </section>
      <section className="mt-[20px] xl:ml-[50px] flex flex-col items-center md:items-start">
        <h2 className="font-light text-[25px] text-white border-b-[2px] border-orange">
          Kontakt
        </h2>
        <h3 className="mt-[20px] text-[18px] text-center text-white">Adres</h3>
        <p className="mt-[20px] text-[18px] text-center text-white font-light">
          OSK - Nefrytowa 5 Kraków
        </p>
        <p className="mt-[5px] text-[18px] text-center text-white font-light">
          Sale wykładowe - Aleja Pokoju 5a
        </p>
        <h3 className="mt-[20px] text-[18px] text-center text-white">
          Dane kontaktowe
        </h3>
        <a
          href="tel:+503665669"
          className="mt-[20px] text-[18px] text-center text-white font-light"
        >
          Telefon: 503 665 669
        </a>
        <CopyToClipboard
          text="autojedynka@gmail.com"
          onCopy={props.copy}
          className="mt-[5px] text-[18px] text-center text-white font-light cursor-copy"
        >
          <span>Email: autojedynka@gmail.com</span>
        </CopyToClipboard>
      </section>
      <nav className="mt-[20px] xl:ml-[50px] flex flex-col">
        <h2 className="mb-[20px] self-center md:self-start font-light text-[25px] text-white border-b-[2px] border-orange">
          Menu
        </h2>
        <ul className="flex flex-col items-center md:items-start gap-[5px]">
          {menuData.map(([title, url]) => (
            <li key={Math.floor(Math.random() * 10000)}>
              <NavLink
                to={url}
                className="text-[18px] text-white font-light"
                activeClassName="text-orange"
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="copyBar mt-[20px] p-[20px] flex items-center justify-center text-[18px] text-white text-center font-light bg-black">
        Copyright Auto Jedynka 2022{" "}
        <span className="ml-[10px] text-orange">&copy;</span>
      </div>
    </footer>
  );
};

export default Footer;
