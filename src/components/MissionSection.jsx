import Button from "./Button.jsx";
import baby2 from "../assets/Images/our-mission.jpg";

export default function MissionSection() {
  return (
    <section className="section-default flex-col-reverse my-6 md:my-0 ">
      <div className="flex md:items-center md:justify-center  px-5">
        <div className="flex flex-col md:items-center justify-center gap-3 mt-4  mb-5">
          <div className="head text-2xl">Our Mission</div>
          <div className="md:w-3/4 w-full">
            We’re on a mission to make it easy for every family to sleep better.
            We apply state-of-the-art technology to science-based sleep
            understanding so that we can make quality, credible sleep support
            accessible to everyone – because every baby and their family deserve
            better sleep!
          </div>
          <Button text="UNLOCK BETTER SLEEP" />
        </div>
      </div>
      <img src={baby2} alt="Photo Missing" className="md:w-1/2 w-full" />
    </section>
  );
}
