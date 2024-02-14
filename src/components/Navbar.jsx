import logo from "../assets/Icons/Logo.svg"
import cart from "../assets/Icons/Cart-icon.svg"


export default function Navbar() {
  return (
    <div className="bg-main_color flex p-3 justify-around items-center">
      <div className="">
        <img src={logo} alt="logo" />
      </div>

      <div className="flex gap-2.5 text-white">

      <div className="">SMART SLEEP COACH</div>
      <div className="">UPGRADE TO PRO</div>
      <div className="">SLEEP PLANS</div>
      <div className="">REVIEWS</div>
      <div className="">FAQs</div>


  
        </div>

      <div className="">
        <div className="flex gap-1">
          <div className="text-white">SIGN IN or REGISTER</div>
          <div className=""><img src={cart} alt="Cart" /></div>
        </div>

        {/*<div className="">*/}
        {/*  <button className="">GET STARTED</button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
