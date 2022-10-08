import useNotification from "../custom-hooks/use-notification";
import { CopyToClipboard } from "react-copy-to-clipboard";

import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import Notification from "../UI/Notification";
import Footer from "../Components/Footer";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Contact = (props) => {
  const { notification: copyNotification, onNoti: onCopy } = useNotification();

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <Notification onShow={copyNotification} text={"Skopiowano do schowka"} />
      <h2 className="section-title">
        <span className="text-orange">Skontaktuj</span> się z nami
      </h2>

      <section className=" w-[90vw] lg:w-[60vw] customMargin flex flex-col ">
        <h3 className="mb-[30px]  text-[25px] md:text-[30px] text-orange">
          Dane kontaktowe
        </h3>
        <div className="flex items-center mb-[20px]">
          <div className="w-[50px] h-[50px] mr-[10px] flex items-center justify-center bg-orange rounded-full">
            <EmailIcon style={{ fontSize: "30px", color: "#ffffff" }} />
          </div>
          <CopyToClipboard
            text="autojedynka@gmail.com"
            onCopy={onCopy}
            className="text-[18px] md:text-[20px] font-light cursor-copy"
          >
            <span>autojedynka@gmail.com</span>
          </CopyToClipboard>
        </div>
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] mr-[10px] flex items-center justify-center bg-orange rounded-full">
            <PhoneIcon style={{ fontSize: "30px", color: "#ffffff" }} />
          </div>
          <a
            href="tel:+503665669"
            className="text-[18px] md:text-[20px] font-light"
          >
            503 665 669
          </a>
        </div>
        <h3 className="mb-[30px] mt-[30px] text-[25px] md:text-[30px] text-orange">
          Adres
        </h3>
        <div className="flex items-center mb-[20px]">
          <div className="w-[50px] h-[50px] mr-[10px] flex items-center justify-center bg-orange rounded-full">
            <LocationOnRoundedIcon
              style={{ fontSize: "30px", color: "#ffffff" }}
            />
          </div>
          <p className="text-[18px] md:text-[20px] font-light">
            OSK - Nefrytowa 5 Kraków
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] mr-[10px] flex items-center justify-center bg-orange rounded-full">
            <AccountBalanceRoundedIcon
              style={{ fontSize: "30px", color: "#ffffff" }}
            />
          </div>
          <p className="text-[18px] md:text-[20px] font-light">
            Sale wykładowe - Popiełuszki 36 Kraków
          </p>
        </div>
      </section>
      <MapContainer
        className="h-[30vh] mt-[50px]"
        center={[50.0205377413784, 20.049681455820966]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution={`&copy; ${(
            <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
          )} contributors`}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.0205377413784, 20.049681455820966]}></Marker>
      </MapContainer>
      <Footer copy={onCopy} />
    </>
  );
};

export default Contact;
