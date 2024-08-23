const Banner = () => {
  return (
    <div className="relative bg-gray-100 py-2 overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="whitespace-nowrap animate-marquee">
          <span className="pr-8">
            Акція! З 15 по 24 липня на групи комодів, тумб для взуття та
            передпокої!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
