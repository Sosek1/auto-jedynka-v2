const LoginForm = () => {
  return (
    <form className="w-[80%] md:w-[60%] lg:w-[40%] min-h-[200px] md:min-h-[300px]  p-[20px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[40px] rounded customBoxShadow">
      <label className="text-[20px] font-medium text-center">
        Zaloguj się do panelu administracyjnego
      </label>
      <input
        className="p-[5px] text-[16px] md:text-[18px] focus:outline-none border-b-2 border-orange "
        placeholder="Podaj email"
      ></input>
      <input
        className="p-[5px] text-[16px] md:text-[18px] focus:outline-none border-b-2 border-orange"
        placeholder="Podaj hasło"
      ></input>
      <button className="w-[100%] h-[40px] text-white bg-orange rounded">
        Zaloguj się
      </button>
    </form>
  );
};

export default LoginForm;
