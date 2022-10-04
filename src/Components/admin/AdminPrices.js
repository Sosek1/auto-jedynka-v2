import { useRef, useEffect } from "react";
import useHttp from "../../custom-hooks/use-http";
import { getCoursePrices, updatePrices } from "../../lib/api";

import LoadingSpinner from "../../UI/LoadingSpinner";

const AdminPrices = (props) => {
  const {
    sendRequest: sendRequestForFetch,
    data: loadedPrices,
    status,
    error,
  } = useHttp(getCoursePrices);
  const { sendRequest: sendRequestForUpdate } = useHttp(updatePrices);

  const weekendCoursePrice = useRef();
  const expressCoursePrice = useRef();

  useEffect(() => {
    sendRequestForFetch();
  }, [sendRequestForFetch, sendRequestForUpdate]);

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
      className="w-[90vw] xl:w-[80vw] 2xl:w-[70vw] customMargin flex flex-col "
    >
      <div className="h-[100%] w-[100%] p-[20px] flex flex-col lg:flex-row lg:items-center gap-5 customBoxShadow rounded">
        <div className="lg:mr-[20px] flex items-center justify-between  lg:text-center">
          <label className="text-[16px] md:text-[18px]">{`Kurs weekendowy: ${
            status === "completed" ? loadedPrices.weekendCourse : ""
          }`}</label>
          <div>{status === (null || "pending") && <LoadingSpinner />}</div>
        </div>
        <input
          ref={weekendCoursePrice}
          className="w-[200px] p-y-[5px] p-l-[5px] lg:mr-[20px] text-[16px] md:text-[18px] text-orange focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
          placeholder="Zmień cenę kursu"
        ></input>
        <div className="lg:mr-[20px] flex items-center justify-between  lg:text-center">
          <label className="text-[16px] md:text-[18px]">{`Kurs weekendowy: ${
            status === "completed" ? loadedPrices.expressCourse : ""
          }`}</label>
          <div>{status === (null || "pending") && <LoadingSpinner />}</div>
        </div>
        <input
          ref={expressCoursePrice}
          className="w-[200px] p-y-[5px] text-[16px] md:text-[18px] text-orange focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
          placeholder="Zmień cenę kursu"
        ></input>
      </div>
      <button
        onClick={() => {
          props.noti();
          props.text();
        }}
        type="submit"
        className="w-[150px] h-[40px] mt-[20px] text-[16px] md:text-[18px] text-white bg-orange rounded"
      >
        Zmień
      </button>
    </form>
  );
};

export default AdminPrices;
