const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] md:h-[70vh] relative bg-[url('https://firebasestorage.googleapis.com/v0/b/autojedynka-8fe6f.appspot.com/o/banner.jpg?alt=media&token=71d9c4dc-eef1-4f9b-a094-5d033b77e0bb')] bg-no-repeat bg-cover bg-center">
      <div className="min-h-[calc(100vh-80px)] md:h-[70vh] flex flex-col items-center justify-start bg-black opacity-60">
        <h1 className="mt-[30px] text-center text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-medium  text-white z-10">
          OSK Auto Jedynka
        </h1>
        <h2 className="ml-[5px] mr-[5px] text-center text-[20px] lg:text-[30px] font-normal text-white z-10">
          <span className="text-orange">Pierwszorzędne </span>kursy jazdy w
          Krakowie
        </h2>
      </div>
      <a
        href="tel:+503665669"
        className="w-[170px] h-[50px] md:w-[200px] md:h-[50px] absolute left-[50%] bottom-[50px] md:bottom-[30px] translate-x-[-50%] flex items-center justify-center text-[16px] md:text-[20px] text-white font-light bg-orange border-2 border-orange hover:border-white ease-in-out duration-200 cursor-pointer z-10"
      >
        Zapisz się na kurs
      </a>
    </section>
  );
};

export default Banner;
