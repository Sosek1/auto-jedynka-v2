import SchoolIcon from "@mui/icons-material/School";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";

const Features = () => {
  const featuresData = [
    ["Wysoka zdawalność", "featuresH1Sm md:featuresH1Md xl:featuresH1_2xl"],
    [
      "Bezpieczeństwo w trakcie jazdy",
      "featuresH2Sm md:featuresH2Md xl:featuresH2_2xl",
    ],
    ["Elastyczne terminy", "featuresH3Sm md:featuresH3Md xl:featuresH3_2xl"],
    [
      "Doświadczeni instruktorzy",
      "featuresH4Sm md:featuresH4Md xl:featuresH4_2xl",
    ],
  ];

  const featuresIcons = [
    <SchoolIcon style={{ color: "#F58445", fontSize: "40px" }} />,
    <SecurityIcon style={{ color: "#F58445", fontSize: "40px" }} />,
    <AccessTimeIcon style={{ color: "#F58445", fontSize: "40px" }} />,
    <GroupIcon style={{ color: "#F58445", fontSize: "40px" }} />,
  ];

  return (
    <section className="grid grid-cols-[1fr] md:grid-cols-2 xl:grid-cols-4 grid-rows-8 md:grid-rows-4 xl:grid-rows-2 justify-items-center items-center gap-y-[20px] md:gap-y-[10px] 2xl:gap-y-[0px]">
      {featuresIcons.map((icon) => (
        <div
          key={Math.floor(Math.random() * 10000)}
          className="w-[80px] h-[80px] flex items-center justify-center border-[1px] border-orange rounded-full"
        >
          {icon}
        </div>
      ))}

      {featuresData.map(([feature, customClass]) => (
        <p
          key={Math.floor(Math.random() * 10000)}
          className={`${customClass} text-[18px] md:text-[20px] text-center`}
        >
          {feature}
        </p>
      ))}
    </section>
  );
};

export default Features;
