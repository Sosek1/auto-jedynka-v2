const post = (props) => {
  return (
    <article className="w-[80vw] md:w-[60vw] lg:w-[50vw] customMargin p-[20px] flex flex-col customBoxShadow rounded">
      <p className="text-gray text-[16px] md:text-[18px]">{props.date}</p>
      <h1 className="mt-[20px] text-[18px] md:text-[20px] font-medium">
        {props.title}
      </h1>
      <p className="mt-[20px] text-[16px] md:text-[18px]">{props.text}</p>
    </article>
  );
};

export default post;
