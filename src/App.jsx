import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Simplify from './components/Simplify'
import Footer from './components/Footer'
import './App.css'

function App() {
    
  return (
    <div className='bg-neutral-gray50 text-neutral-gray   w-full p-4   '>
          <div className="flex flex-col  items-center  ">
            <Navbar/> 
               <main className='pt-[65px] '>
                   <Hero/>
                   <About/>
                   <Testimonial/>
                   <Simplify/>
                   <Footer/>
               </main>
          </div>

    </div>
  )
}

export default App
