const CopyNotification = (props) => {
  return (
    <div
      className={`h-[50px] w-[250px] fixed left-[50%] top-[20px] translate-x-[-50%] flex items-center justify-center text-[15px]  text-white bg-gray rounded transition ease-out duration-3 ${
        props.onShow
          ? "translate-y-0 opacity-1"
          : "translate-y-[-100%] opacity-0"
      }`}
    >
      Skopiowano do schowka
    </div>
  );
};

export default CopyNotification;
