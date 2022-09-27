import useNotification from "../custom-hooks/use-notification";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Map, { Marker } from "react-map-gl";

import TopBar from "../Components/TopBar";
import Menu from "../Components/Menu";
import CopyNotification from "../UI/CopyNotification";
import Footer from "../Components/Footer";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

const Contact = (props) => {
  const { copyNotification, onCopy } = useNotification();
  const coordinates = {
    lng: 20.04974582883778,
    lat: 50.02053084796161,
  };
  return (
    <>
      <header>
        <TopBar copy={onCopy} />
        <Menu />
      </header>
      <CopyNotification onShow={copyNotification} />
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
      <div className="h-[30vh] mt-[50px]">
        <Map
          mapboxAccessToken="pk.eyJ1Ijoic29zZWsiLCJhIjoiY2w4aXdpbGdtMHV3bTN4bXJiNWx6bG1qdCJ9.49nkCyCNes841N45b4y9LQ"
          initialViewState={{
            longitude: 20.04974582883778,
            latitude: 50.02053084796161,
            zoom: 13,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker
            longitude={coordinates.lng}
            latitude={coordinates.lat}
          ></Marker>
        </Map>
      </div>
      <Footer copy={onCopy} />
    </>
  );
};

export default Contact;
