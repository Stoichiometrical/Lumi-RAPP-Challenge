import home_mobile from "../assets/Images/home-banner1-mobile.jpg";
import home_herp from "../assets/Images/home-banner1-desktop.jpg";
import Button from "./Button.jsx";

export default function HeroSection({ isMobile, handleImageLoad }) {
  return (
    <section className="relative  m-0 ">
      <img
        src={isMobile ? home_mobile : home_herp}
        className="object-cover w-full"
        alt="background"
        onLoad={handleImageLoad}
      />
      <div className="absolute lg:w-1/4  md:w-1/2 flex flex-col gap-2 md:top-[25%]  top-[45%] px-5 lg:right-28  md:right-24">
        <div className="rounded-xl home-tank bg-neutral-950 bg-opacity-40 p-4 text-white">
          <div className="fregular text-3xl">
            Your baby can be a super sleeper
          </div>
          <div className="fregular text-lg">
            Lumi’s app-bases sleep coaching and tracking tools will have your
            baby sleeping better in just 7 days
          </div>
        </div>

        <div className=" ml-2 mr-4  ">
          <Button text="GET STARTED" />
        </div>
      </div>
    </section>
  );
}
