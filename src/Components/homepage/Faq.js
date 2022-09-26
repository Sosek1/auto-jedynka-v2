const Faq = () => {
  const questions = [
    "Co jest potrzebne do rozpoczęcia kursu prawa jazdy?",
    "W jakim wieku można rozpocząć kurs prawa jazdy?",
    "Ile Trwa kurs prawa jazdy? Ile trwają wykłady, a ile jazdy?",
    "Jak przebiega nauka teorii?",
    "Jak przebiega nauka jazdy?",
  ];

  return (
    <section className="flex flex-col items-center">
      <ul className="flex flex-col justify-around gap-[30px]">
        {questions.map((question) => (
          <li
            key={Math.floor(Math.random() * 10000)}
            className="w-[90%] h-[20%] customMargin text-center text-[18px] md:text-[20px] color-black"
          >
            {question}
          </li>
        ))}
      </ul>
      <button className="w-[170px] h-[50px] md:w-[200px] md:h-[50px] mt-[30px] text-[16px] md:text-[20px] text-center text-white font-light bg-orange z-10">
        Poznaj odpowiedzi
      </button>
    </section>
  );
};

export default Faq;
