import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import RestoreIcon from "@mui/icons-material/Restore";

const Statistics = () => {
  const statisticsData = [
    ["numbersProcent", "80%", "order-2"],
    ["numbersText", "Wysoka zdawalność", "order-3"],
    ["numbersNumber", "1000", "order-5"],
    ["numbersText2", "Liczba kursantów", "order-6"],
    ["numbersYears", "16 lat", "order-8"],
    ["mb-[30px] md:mb-0 numbersText3", "Lat dowiadczenia", "order-9"],
  ];

  return (
    <section className="min-h-[80vh] md:min-h-[300px] lg:h-[40vh] flex flex-col md:grid grid-cols-3 grid-rows-3 items-center justify-between md:justify-items-center relative bg-[url('https://firebasestorage.googleapis.com/v0/b/autojedynka-8fe6f.appspot.com/o/pexels-jackson-david-3787149.jpg?alt=media&token=0cc4c8d1-7ded-49e7-9983-2a149661ecf9')] bg-no-repeat bg-cover bg-center">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60"></div>
      {statisticsData.map(([class1, text, class2]) => (
        <p
          key={Math.floor(Math.random() * 10000)}
          className={`${class1} ${class2} text-[20px] lg:text-[30px] text-white font-500 z-10`}
        >
          {text}
        </p>
      ))}
      <SchoolIcon
        style={{
          fontSize: "50px",
          color: "#F58445",
          zIndex: "10",
          gridArea: "1/1/2/2",
          marginTop: "30px",
          order: 1,
        }}
      />
      <GroupIcon
        style={{
          fontSize: "50px",
          color: "#F58445",
          zIndex: "10",
          gridArea: "1/2/2/3",
          marginTop: "30px",
          order: 4,
        }}
      />
      <RestoreIcon
        style={{
          fontSize: "50px",
          color: "#F58445",
          zIndex: "10",
          marginTop: "30px",
          order: 7,
        }}
      />
    </section>
  );
};

export default Statistics;
