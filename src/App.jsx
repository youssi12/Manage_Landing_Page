import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Simplify from './components/Simplify'
import Footer from './components/Footer'
import shape from "./assets/images/bg-tablet-pattern.svg"
import './App.css'

function App() {
  return (
     <div className="bg-neutral-gray50 text-neutral-gray w-full px-4 pb-4 relative overflow-hidden">
          
             <img
               src={shape}
               alt=""
               aria-hidden="true"
               className=" absolute -top-20 -right-[100px]  pointer-events-none w-[400px] md:w-[480px] z-0 lg:scale-150"
  />
      

  <div className="flex flex-col items-center relative z-10">
    <Navbar />
    <main className="pt-[65px] w-full">
       <div className=" lg:max-w-[1000px] mx-auto py-10 ">
          <Hero />
          <About  />
       </div>
      <Testimonial />
      <Simplify />
      <Footer />
    </main>
  </div>
</div>

  )
}

export default App
