const Section2 = () => {
  return (
    <section className="flex flex-row  items-center justify-between mt-16 px-48 space-x-6">
      <div className="">
        <img
          src="section2.svg"
          className="h-[460px] w-[460px]"
          alt="sponsoramicoOne"
        />
      </div>
      <div className="flex flex-col w-1/2 space-y-4 items-center justify-center">
        <h1 className="font-gelasio font-bold text-4xl text-blue_gray_900 w-full">
          Save your favorite investors to your own investor lists.
        </h1>
        <h6 className="font-medium font-poppins text-blue_gray_400 w-full">
          Save the best investors to your investor lists so you can pitch them
          when you’re ready.
        </h6>
        <h6 className="font-medium font-poppins text-blue_gray_400 w-full">
          Export your investor lists to CSV, import the investor contact info
          into your favorite email system, and start sending them your pitches.
        </h6>
      </div>
    </section>
  );
};

export default Section2;
