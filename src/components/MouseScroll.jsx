const MouseScroll = () => {
  return (
    <div className="w-8 h-14 relative">
      <div className="w-[6px] h-7 p-2.5 border-2 border-white rounded-[25px] opacity-75 box-content flex items-center justify-center">
        <div className="w-[6px] h-2 bg-white rounded-full animate-scroll"></div>
      </div>
    </div>
  );
};

export default MouseScroll;
