const post = (props) => {
  return (
    <article className="w-[100%] p-[20px] flex flex-col customBoxShadow border-t-4 border-orange rounded">
      <p className="text-gray text-[16px] md:text-[18px]">{props.date}</p>
      <h1 className="mt-[20px] text-[18px] md:text-[20px] font-medium">
        {props.title}
      </h1>
      <p className="mt-[20px] text-[16px] md:text-[18px]">{props.text}</p>
    </article>
  );
};

export default post;
