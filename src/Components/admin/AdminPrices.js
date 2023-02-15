import { useRef, useEffect, useState } from "react";
import useHttp from "../../custom-hooks/use-http";
import { getCoursePrices, updatePrices } from "../../lib/api";

import LoadingSpinner from "../../UI/LoadingSpinner";

const AdminPrices = (props) => {
  const { sendRequest: sendRequestForFetch, status } = useHttp(getCoursePrices);

  const [prices, setPrices] = useState({
    weekendCourse: 0,
    expressCourse: 0,
  });

  const [showError, setShowError] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    (async () => {
      const pricesObj = await getCoursePrices();
      setPrices({ ...pricesObj });
    })();
    sendRequestForFetch();
  }, [sendRequestForFetch]);

  const weekendCoursePrice = useRef();
  const expressCoursePrice = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredWeekendCoursePrice = weekendCoursePrice.current.value;
    const enteredExpressCoursePrice = expressCoursePrice.current.value;

    if (enteredWeekendCoursePrice === "" && enteredExpressCoursePrice === "") {
      setShowError({ error: true, message: "Nie podano cen" });
      return;
    }
    if (enteredWeekendCoursePrice === "" || enteredExpressCoursePrice === "") {
      setShowError({ error: true, message: "Nie podano jednej z cen" });
      return;
    }

    updatePrices({
      weekendCourse: enteredWeekendCoursePrice,
      expressCourse: enteredExpressCoursePrice,
    });

    setPrices({
      weekendCourse: enteredWeekendCoursePrice,
      expressCourse: enteredExpressCoursePrice,
    });

    props.noti();
    props.text();

    weekendCoursePrice.current.value = "";
    expressCoursePrice.current.value = "";
    setShowError(false);
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="w-[90vw] xl:w-[80vw] 2xl:w-[70vw] customMargin flex flex-col"
    >
      <div className="h-[100%] w-[100%] p-[20px] flex flex-col lg:flex-row lg:items-center gap-5 customBoxShadow rounded">
        <div className="lg:mr-[20px] flex items-center justify-between  lg:text-center">
          <label className="text-[16px] md:text-[18px]">{`Kurs ekspresowy: ${
            status === "completed" ? prices.weekendCourse : ""
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
            status === "completed" ? prices.expressCourse : ""
          }`}</label>
          <div>{status === (null || "pending") && <LoadingSpinner />}</div>
        </div>
        <input
          ref={expressCoursePrice}
          className="w-[200px] p-y-[5px] text-[16px] md:text-[18px] text-orange focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
          placeholder="Zmień cenę kursu"
        ></input>
      </div>
      {showError.error && (
        <p className="text-[16px] mt-[20px] text-orange font-medium ">
          {showError.message}
        </p>
      )}
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
