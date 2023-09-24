const Banner = () => {
  return (
    <div className="pt-40 pb-[400px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-10">
        I Grow By Helping People In Need
      </h1>
      <div className="flex justify-center items-center">
        <input
          className="border focus:outline-none rounded-l-lg px-4 py-[11px] w-80 lg:w-[400px]"
          type="search"
          placeholder="Search here...."
        />
        <button className="btn btn-ghost normal-case rounded-l-[0px] rounded-r-lg bg-color-1 hover:bg-[#ff444aaa] font-semibold text-white px-7">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
