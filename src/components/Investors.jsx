const Investors = () => {
  return (
    <div className="mt-[700px]">
      <div className="flex flex-col items-center justify-center w-screen">
        <h2 className="font-gelasio text-blue_gray_900 text-center">
          <span className="md:text-[28px] sm:text-[26px] text-blue_gray_900 text-3xl font-bold">
            Powering the{" "}
          </span>
          <span className="md:text-[28px] sm:text-[26px] text-light_blue_500 text-3xl font-bold">
            8000+
          </span>
          <span className="md:text-[28px] sm:text-[26px] text-blue_gray_900 text-3xl font-bold">
            {" "}
            Investors List
          </span>
        </h2>
        <h6 className="font-medium font-poppins text-blue_gray_400 text-center">
          USED BY
        </h6>
      </div>
      <div className="flex flex-row space-x-10 mt-10 items-center justify-center">
        <img
          src="salesforce.png"
          className="h-10"
          alt="downloadFortyOne"
        />
        <h1 className="font-bold">First Round</h1>
        <img
          src="src/assets/DataRobot.png"
          className="h-10"
          alt="downloadEightyOne"
        />
        <img src="src/assets/google.png" className="h-10" alt="google" />
        <img src="src/assets/adobe.png" className="h-10" alt="" />
        <img src="src/assets/greylock.svg" className="h-10" alt="nibggstif" />
      </div>
    </div>
  );
};

export default Investors;
