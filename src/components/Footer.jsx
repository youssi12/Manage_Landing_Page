import youtube from "../assets/images/icon-youtube.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"
import facebook from "../assets/images/icon-facebook.svg"
import logo2 from "../assets/images/logo2.svg"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-primary-blue min-w-full -mx-4 px-4 py-4  '>
      
      <div className="  flex  flex-col-reverse mx-auto     space-y-8 py-4 px-1 md:flex-row  md:justify-between">

        <div className="flex flex-col-reverse  items-center gap-y-6 md:flex-col md:space-y-16   min-w-[150px]">
          <div className="text-center md:hidden">
            Copyright {currentYear}. All Rights Reserved
          </div>

          <div className="  my-4 shrink-0">
            <img src={logo2} alt="Logo" />
          </div>

          <div className="flex   gap-4 items-center   shrink-0">
            <a   href="##"><img src={facebook} alt="Facebook" /></a>
            <a    href="##"><img src={youtube} alt="YouTube" /></a>
            <a    href="##"><img src={twitter} alt="Twitter" /></a>
            <a   href="##"><img src={pinterest} alt="Pinterest" /></a>
            <a  href="##"><img src={instagram} alt="Instagram" /></a>
          </div>
        </div>

        <div className="flex justify-around text-neutral-gray50 leading-8 md:space-x-10">
          <ul className="list-none ml-3">
            <li><a href="###">Home</a></li>
            <li><a href="###">Pricing</a></li>
            <li><a href="###">Products</a></li>
            <li><a href="###">About</a></li>
          </ul>
          <ul className="list-none">
            <li><a href="##">Careers</a></li>
            <li><a href="##">Community</a></li>
            <li><a href="##">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="mb-7  ">
          <div className="flex  justify-center ">
            <input
              type="email"
              placeholder="Updates in your inbox…"
              className="bg-white py-3 px-4 rounded-full mr-2
              outline-none border-none text-primary-orange placeholder:text-neutral-400 
              flex-1
              "
            />
            <button className="bg-primary-orange py-3 px-7 rounded-full hover:scale-105 transition-transform text-neutral-gray50">
              Go
            </button>
          </div>
          <div className="hidden md:block md:mt-10 text-neutral-gray50">
            Copyright {currentYear + 1}. All Rights Reserved
          </div>
        </div>

      </div>
    </footer>
  )
}
