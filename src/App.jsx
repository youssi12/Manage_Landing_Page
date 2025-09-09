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
    <div className='bg-neutral-gray50 text-neutral-gray w-full p-4'>
      {/* fixed decorative shape in top-right of the viewport */}
      <img
        src={shape}
        alt=""                         /* decorative -> empty alt */
        aria-hidden="true"
        className="fixed -top-10 -right-20 pointer-events-none w-[360px] sm:w-[460px] md:w-[480px]   z-0"
      />

      <div className="flex flex-col items-center relative z-10">
        <Navbar />
        <main className='pt-[65px] w-full'>
          <Hero />
          <About />
          <Testimonial />
          <Simplify />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
