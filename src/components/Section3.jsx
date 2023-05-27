const Section3 = () => {
  return (
    <section className="flex flex-row  items-center justify-between mt-16 px-48 space-x-6">
      <div className="flex flex-col w-1/2 space-y-4 items-start justify-start">
        <h6 className="font-semibold font-poppins text-light_blue_500 w-full">
          Get Investement of $1M within 20 days with PlayBook.
        </h6>
        <h1 className="font-gelasio font-bold text-4xl text-blue_gray_900 w-full">
          The comprehensive investor Database for Founders.
        </h1>
        <h6 className="font-medium font-poppins text-blue_gray_400 w-full">
          100x Investor investor database includes Eight thousands of elite
          angel investors, venture capitalists, and venture capital funds
          investing billions of dollars in startups all over the world.
        </h6>
        <button className="bg-light_blue_500 text-white_A700 w-32 text-base rounded-full font-medium shadow-light_blue_500 px-6 py-2">
          Get Now
        </button>
      </div>
      <div className="">
        <img
          src="src/assets/section3.svg"
          className="h-[460px] w-[460px]"
          alt="sponsoramicoOne"
        />
      </div>
    </section>
  );
};

export default Section3;
