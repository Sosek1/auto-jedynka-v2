import { useRef, useEffect } from "react";
import useHttp from "../../custom-hooks/use-http";
import { getCoursePrices, updatePrices } from "../../lib/api";

const AdminPrices = (props) => {
  const { sendRequest: sendRequestForFetch, data: loadedPrices } =
    useHttp(getCoursePrices);
  const { sendRequest: sendRequestForUpdate } = useHttp(updatePrices);

  const weekendCoursePrice = useRef();
  const expressCoursePrice = useRef();

  useEffect(() => {
    sendRequestForFetch();
  }, [sendRequestForFetch]);

  console.log(loadedPrices);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredWeekendCoursePrice = weekendCoursePrice.current.value;
    const enteredExpressCoursePrice = expressCoursePrice.current.value;

    sendRequestForUpdate({
      weekendCourse: enteredWeekendCoursePrice,
      expressCourse: enteredExpressCoursePrice,
    });
    weekendCoursePrice.current.value = "";
    expressCoursePrice.current.value = "";
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="w-[90vw] xl:w-[80vw] 2xl:w-[60vw] customMargin flex flex-col "
    >
      <div className="h-[100%] w-[100%] p-[20px] flex flex-col lg:flex-row lg:items-center gap-5 customBoxShadow rounded">
        <label className="lg:mr-[20px] text-[16px] md:text-[18px] lg:text-center">{`Kurs Weekendowy`}</label>
        <input
          ref={weekendCoursePrice}
          className="w-[200px] p-y-[5px] p-l-[5px] lg:mr-[20px] text-[16px] md:text-[18px] text-orange focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
          placeholder="Zmień cenę kursu"
        ></input>
        <label className="mr-[20px]  text-[16px] md:text-[18px] lg:text-center">
          {`Kurs Expressowy`}
        </label>
        <input
          ref={expressCoursePrice}
          className="w-[200px] p-y-[5px] text-[16px] md:text-[18px] text-orange focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
          placeholder="Zmień cenę kursu"
        ></input>
      </div>
      <button
        type="submit"
        className="w-[150px] h-[40px] mt-[20px] text-[16px] md:text-[18px] text-white bg-orange rounded"
      >
        Zmień
      </button>
    </form>
  );
};

export default AdminPrices;
