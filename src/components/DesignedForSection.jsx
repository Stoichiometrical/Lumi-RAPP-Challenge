import baby3 from "../assets/Images/lumi-designed-for.jpg";
import Button from "./Button.jsx";

export default function DesignedForSection() {
  return (
    <section className="section-default flex-col ">
      <img src={baby3} alt="Photo" className=" md:flex md:w-1/2 w-full" />

      <div className="flex flex-col md:justify-center md:items-center gap-4 my-5 px-6">
        <div className="fbook font-semibold text-3xl text-main_color">
          Lumi is designed for
        </div>
        <div className="fbook text-start text-lg md:w-3/4">
          <b>
            Every parent who wants their baby to fall asleep, stay asleep, and
            wake up happy in the morning
          </b>
          . Whether you’re struggling with sleep or simply making sure you’re
          doing what’s best for your family, we have you covered.
        </div>
        <Button />
      </div>
    </section>
  );
}
