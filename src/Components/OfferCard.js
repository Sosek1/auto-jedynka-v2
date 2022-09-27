import AnimationComponent from "../UI/AnimationComponent";

const OfferCard = (props) => {
  const offerData = {
    weekendCourse: {
      name: "Weekendowy",
      price: "2500 zł",
      properties: [
        "Wykłady teoretyczne",
        "Jazdy na placu manewrowym",
        "Jazdy w ruchu miejskim",
        "Samochodzy jak na egzaminach",
        "Materiały edukacyjne gratis",
        "Testy egzaminacyjne online",
      ],
    },
    expressCourse: {
      name: "Ekspresowy",
      price: "2900 zł",
      properties: [
        "Wszystkie wykłady i jazdy w 18 dni",
        "Wykłady teoretyczne",
        "Jazdy na placu manewrowym",
        "Jazdy w ruchu miejskim",
        "Samochodzy jak na egzaminach",
        "Materiały edukacyjne gratis",
        "Testy egzaminacyjne online",
      ],
    },
  };

  return (
    <AnimationComponent
      variant={props.animationVariant}
      class="h-[450px] w-[75%] md:w-[55%] lg:w-[40%] 2xl:w-[30%] flex flex-col items-center border-t-2 border-orange bg-white customBoxShadow hover:customBoxShadowOnHover ease-in-out duration-200 cursor-pointer"
    >
      <h3 className="h-[10%] flex items-center justify-center text-[20px]">
        {offerData[props.courseType].name}
      </h3>
      <p className="w-[100%] h-[10%] mb-[20px] flex items-center justify-center text-white text-[20px] font-light bg-orange">
        {offerData[props.courseType].price}
      </p>
      <ul className="w-[100%] h-[70%] flex flex-col items-center justify-between ">
        {offerData[props.courseType].properties.map((text) => (
          <li
            key={Math.floor(Math.random() * 10000)}
            className="text-[16px] md:text-[18px] text-center"
          >
            {text}
          </li>
        ))}
      </ul>
      <button className="w-[100%] h-[10%] mt-[20px] text-white text-[18px] md:text-[20px] bg-black">
        Więcej
      </button>
    </AnimationComponent>
  );
};

export default OfferCard;
