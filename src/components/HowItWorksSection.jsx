import baby from "../assets/Images/how-it-works-desktop.jpg";
import Button from "./Button.jsx";

export default function HowItWorksSection() {
  return (
    <section className="section-default flex-col">
      <div className="md:w-1/2 w-full p-4 md:p-0">
        <img src={baby} alt="Photo Missing" />
      </div>

      <div className="flex  md:items-center md:justify-center  justify-start px-4">
        <div className="flex flex-col md:w-3/5 gap-3 ">
          <div className="head text-center ">How it works</div>
          <div>
            <div className="font-bold">Lumi’s A, B, Cs, to better Zzzzs</div>
            <div className="pb-3">
              <span className="text-main_color font-bold">A.</span>
              <b>We coach.</b> Our Pediatric sleep experts will take you
              step-by-step to sleep success
            </div>
            <div className="pb-3">
              <span className="text-main_color font-bold">B.</span>
              <b>You log.</b> Record your baby’s sleeps directly within the app
            </div>
            <div className="pb-3">
              <span className="text-main_color font-bold">C.</span>
              <b>We analyze.</b> Daily and weekly sleep insight reports measure
              your baby’s progress
            </div>
          </div>
          <div className="text-main_color font-bold">
            Zzzzz your baby sleeps!
          </div>
          <div className="flex w-full items-center justify-center ">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
