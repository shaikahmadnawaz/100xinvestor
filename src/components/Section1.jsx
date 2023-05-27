const Section1 = () => {
  return (
    <section className="flex flex-row  items-center justify-between mt-20 px-48 space-x-6">
      <div className="flex flex-col w-1/2 space-y-4 items-center justify-center">
        <h1 className="font-gelasio font-bold text-4xl text-blue_gray_900 w-full">
          A comprehensive database of investors
        </h1>
        <h6 className="font-medium font-poppins text-blue_gray_400 w-full">
          Our investor database consists of venture capitalists, angel
          investors, and funds from all over the world investing in startups all
          over the world.
        </h6>
      </div>
      <div className="">
        <img
          src="sec1.svg"
          className="h-[460px] w-[460px]"
          alt="sponsoramicoOne"
        />
      </div>
    </section>
  );
};

export default Section1;
