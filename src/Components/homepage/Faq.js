import { Link } from "react-router-dom";
import AnimationComponent from "../../UI/AnimationComponent";
import { scaleVariant } from "../../UI/animationVariants";

const Faq = () => {
  const questions = [
    "Co jest potrzebne do rozpoczęcia kursu prawa jazdy?",
    "W jakim wieku można rozpocząć kurs prawa jazdy?",
    "Ile Trwa kurs prawa jazdy? Ile trwają wykłady, a ile jazdy?",
    "Jak przebiega nauka teorii?",
    "Jak przebiega nauka jazdy?",
  ];

  return (
    <section className="mb-[50px] flex flex-col items-center">
      <ul className="flex flex-col justify-around gap-[30px]">
        {questions.map((question) => (
          <AnimationComponent
            variant={scaleVariant}
            key={Math.floor(Math.random() * 10000)}
          >
            <li className="w-[90%] h-[20%] customMargin text-center text-[18px] md:text-[20px] color-black">
              {question}
            </li>
          </AnimationComponent>
        ))}
      </ul>
      <Link to="/faq">
        <button className="w-[170px] h-[50px] md:w-[200px] md:h-[50px] mt-[30px] text-[16px] md:text-[20px] text-center text-white font-light bg-orange cursor-pointer z-10">
          Poznaj odpowiedzi
        </button>
      </Link>
    </section>
  );
};

export default Faq;
