import { useRef, useState, useContext } from "react";
import { addPosts } from "../../lib/api";
import { PostsContext } from "../../store/posts-context";

const AdminPosts = (props) => {
  const [showError, setShowError] = useState({
    error: false,
    message: "",
  });

  const titleRef = useRef();
  const textRef = useRef();

  const postsCtx = useContext(PostsContext);

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = String(today.getFullYear());
  const todaysDate = day + "." + month + "." + year;

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredTitleRef = titleRef.current.value;
    const enteredTextRef = textRef.current.value;

    if (enteredTextRef === "" && enteredTitleRef === "") {
      setShowError({ error: true, message: "Nie wpisano tytułu i treści" });
      return;
    }

    if (enteredTitleRef === "") {
      setShowError({ error: true, message: "Nie wpisano tytułu" });
      return;
    }

    if (enteredTextRef === "") {
      setShowError({ error: true, message: "Nie wpisano treści" });
      return;
    }

    addPosts({
      title: enteredTitleRef,
      text: enteredTextRef,
      active: true,
      date: todaysDate,
    });

    postsCtx.onAddPost(true);

    titleRef.current.value = "";
    textRef.current.value = "";
    props.noti();
    props.text();
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className="w-[90vw] xl:w-[80vw] 2xl:w-[70vw] customMargin flex flex-col"
    >
      <div className="h-[100%] w-[100%] p-[20px] flex flex-col  gap-5 customBoxShadow rounded">
        <label className="text-[18px] md:text-[20px]">Tytuł</label>
        <input
          ref={titleRef}
          className="p-[5px] text-[16px] md:text-[18px] focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
          placeholder="Wpisz tytuł"
        ></input>
        <label className="text-[18px] md:text-[20px]">Treść</label>
        <textarea
          ref={textRef}
          className="min-h-[200px] p-[5px] text-[16px] md:text-[18px] focus:outline-none border-b-2 border-white focus:border-b-2 focus:border-orange"
          placeholder="Wpisz treść artykułu"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-[150px] h-[40px] mt-[20px] text-[16px] md:text-[18px] text-white bg-orange rounded"
      >
        Dodaj artykuł
      </button>
      {showError.error && (
        <p className="text-[16px] mt-[20px] text-orange font-medium ">
          {showError.message}
        </p>
      )}
    </form>
  );
};

export default AdminPosts;
