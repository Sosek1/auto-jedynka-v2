import { CopyToClipboard } from "react-copy-to-clipboard";

import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const TopBar = (props) => {
  return (
    <section className="h-[5vh] hidden lg:flex justify-between items-center bg-orange">
      <div className="width-[40%] ml-[20px] flex">
        <FacebookIcon style={{ color: "#ffffff" }} />
        <h3 className="ml-[10px] text-white text-[15px] font-light">
          Auto Jedynka
        </h3>
      </div>
      <div className="mr-[20px] flex">
        <PhoneIcon style={{ color: "#ffffff" }} />
        <h3 className="ml-[10px] mr-[20px] text-white text-[15px] font-light">
          503 665 669
        </h3>
        <EmailIcon style={{ color: "#ffffff" }} />
        <CopyToClipboard
          text="autojedynka@gmail.com"
          onCopy={props.copy}
          className="ml-[10px] text-white text-[15px] font-light cursor-copy"
        >
          <span>autojedynka@gmail.com</span>
        </CopyToClipboard>
      </div>
    </section>
  );
};
