import leftShape from "../assets/images/bg-simplify-section-mobile.svg"
import leftShapemd from "../assets/images/bg-simplify-section-desktop.svg"

export default function Simplify() {
  return (
    <div className="bg-primary-orange relative min-w-full -mx-4  md:overflow-hidden">
      {/* Decorative shape */}
      <img src={leftShape} alt="" className="absolute top-10 sm:hidden   md:hidden " />
      <img src={leftShapemd} alt="" className=" hidden md:block md:absolute   md:top-0 md:bottom-0 md:h-full md: w-full"/> 

      {/* Inner container keeps content centered */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 md:min-w-[90%] md:flex  md:justify-around  py-24  md:items-center ">
      
        <h1 className="text-4xl font-bold text-white md:max-w-[45%] md:text-left">
          Simplify how your team works today.
        </h1>

        <button className="mt-6 bg-white text-primary-orange px-7 py-3 rounded-full font-semibold shadow-primary-orange/20 shadow-xl transition-transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}
