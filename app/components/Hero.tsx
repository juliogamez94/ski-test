import { SearchBar } from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative">
      <div className="h-72 sm:h-96 bg-gradient-to-b from-sky-600 to-sky-400 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-3xl sm:text-5xl  font-extrabold">
            DREAM SKI VACATION PACKAGES
          </h1>
          <div className="mt-6">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
