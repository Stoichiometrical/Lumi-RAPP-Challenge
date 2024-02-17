import logo from "../assets/Icons/Logo.svg";
import cart from "../assets/Icons/Cart-icon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  return (
    <nav className="bg-nav_color flex p-4 md:p-3 md:justify-around items-center">
      <div className="flex md:hidden pl-3 mr-2 ">
        <GiHamburgerMenu className="text-white text-2xl" />
      </div>
      <div className=" md:w-fit w-full flex justify-center">
        <img src={logo} alt="logo" />
      </div>

      <div className="hidden md:flex gap-2.5 text-white">
        <div>SMART SLEEP COACH</div>
        <div>UPGRADE TO PRO</div>
        <div>SLEEP PLANS</div>
        <div>REVIEWS</div>
        <div>FAQs</div>
      </div>

      <div className="hidden md:flex">
        <div className="hidden md:flex gap-1">
          <div className="text-white">SIGN IN or REGISTER</div>
          <div>
            <img src={cart} alt="Cart" />
          </div>
        </div>
      </div>
    </nav>
  );
}
