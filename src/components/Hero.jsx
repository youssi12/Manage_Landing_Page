import stats from "../assets/images/illustration-intro.svg";
import shape from "../assets/images/bg-tablet-pattern.svg";

export default function Hero() {
  return (
    <div className="relative z-40 mb-20 mt-10 flex flex-col sm:flex-row items-center sm:justify-between gap-10 px-6">
      
      {/* Background shape */}
      <img
        src={shape}
        alt=""
        aria-hidden="true"
        className="
          absolute
          bottom-[-5vh] right-[-20vw] w-[60vw] max-w-[400px]
          sm:hidden
          z-0 pointer-events-none
        "
      />

      {/* Image Section (first on mobile, second on desktop) */}
      <div className="order-1 sm:order-2 sm:flex-1 flex justify-center z-10">
        <img src={stats} alt="statistics" className="w-full max-w-sm" />
      </div>

      {/* Text Section (second on mobile, first on desktop) */}
      <div className="order-2 sm:order-1   max-w-md text-center sm:text-left z-10 sm:flex-1">
        
        {/* Responsive heading with fixed wrap */}
        <h1 className="text-4xl   lg:text-5xl font-bold mb-3 max-w-xs sm:max-w-md mx-auto sm:mx-0">
          Bring everyone together to build better products.
        </h1>

        {/* Responsive paragraph with fixed wrap */}
        <p className="text-neutral-400 text-sm md:text-base lg:text-lg mb-5 max-w-xs sm:max-w-md mx-auto sm:mx-0">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </p>

        <button className="bg-primary-orange px-7 py-2 rounded-full font-semibold text-neutral-gray50 shadow-primary-orange/70 shadow-xl transition-all hover:scale-105 hover:opacity-80">
          Get Started
        </button>
      </div>
    </div>
  );
}
