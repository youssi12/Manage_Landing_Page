import stats from "../assets/images/illustration-intro.svg";

export default function Hero() {
  return  (
   <div className=" z-30">

       <div className=" ">
        <img src={stats} alt="statistics" />
       </div>
       <div className="  mt-5 px-5 pb-1 ">
         <h1 className="text-4xl font-semibold mb-3 text-center">Bring everyone together to build better products.</h1>

         <p className="text-neutral-400 text-sm text-left mx-7">Manage makes it simple for software teams to plan day-to-day 
         tasks while keeping the larger team goals in view.</p>
         <button className="bg-primary-orange px-7 py-2 my-4  block mx-auto rounded-full font-semibold text-neutral-gray50  shadow-primary-orange/20 shadow-xl 
          transition-transform 
          hover:scale-105
         ">Get Started</button>
       </div>

   </div>
  )
}
