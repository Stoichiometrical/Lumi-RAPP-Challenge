import Navbar from "./components/Navbar.jsx";
import home_herp from "./assets/Images/home-banner1-desktop.jpg";
import home_mobile from "./assets/Images/home-banner1-mobile.jpg";
import Button from "./components/Button.jsx";
import baby from "./assets/Images/how-it-works-desktop.jpg";
import baby2 from "./assets/Images/our-mission.jpg";
import baby3 from "./assets/Images/lumi-designed-for.jpg";
import DropdownItem from "./components/DropdownItem.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [load, setLoad] = useState(false);

  // Update state on image load
  const handleImageLoad = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Update on resize
  useEffect(() => {
    window.addEventListener("resize", handleImageLoad);
    setLoad(true);
    return () => window.removeEventListener("resize", handleImageLoad);
  }, []);

  const faqQuestions = [
    "What is baby sleep training?",
    "Does the Lumi Smart Sleep Coach app work?",
    "I don’t have time to track manually, is there an alternative?",
    "Is sleep training safe for my baby?",
    "Are there multiple sleep training methods to choose from?",
    "How long does it take for my baby’s sleep to improve?",
    "When can I start training my baby to sleep with the Lumi Smart Sleep Coach?",
    "Can I grant app access to other people who care for my baby?",
    "Is it too late to sleep train my baby?",
    "How long will I have access?",
    "Can I cancel my plan?",
  ];

  return (
    <div>
      {load ? (
        <div>
          <Navbar />
          <section className="relative  m-0 ">
            <img
              src={isMobile ? home_mobile : home_herp}
              className="object-cover w-full"
              alt="background"
              onLoad={handleImageLoad} // Set initial screen state on image load
            />
            <div className="absolute lg:w-1/4  md:w-1/2 flex flex-col gap-2 md:top-[25%]  top-[45%] px-5 lg:right-28  md:right-24">
              <div className="rounded-xl home-tank bg-neutral-950 bg-opacity-40 p-4 text-white">
                <div className="cont text-3xl">
                  Your baby can be a super sleeper
                </div>
                <div className="fregular text-lg">
                  Lumi’s app-bases sleep coaching and tracking tools will have
                  your baby sleeping better in just 7 days
                </div>
              </div>

              <div className=" ml-2 mr-4  ">
                <Button text="GET STARTED" />
              </div>
            </div>
          </section>

          <section className="flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full p-4 md:p-0">
              <img src={baby} alt="Photo Missing" />
            </div>

            <div className="flex  md:items-center md:justify-center  justify-start px-4">
              <div className="flex flex-col md:w-3/5 gap-3 ">
                <div className="head text-center">How it works</div>
                <div>
                  <div className="font-bold">
                    Lumi’s A, B, Cs, to better Zzzzs
                  </div>
                  <div className="pb-3">
                    <span className="text-main_color font-bold">A.</span>
                    <b>We coach.</b> Our Pediatric sleep experts will take you
                    step-by-step to sleep success
                  </div>
                  <div className="pb-3">
                    <span className="text-main_color font-bold">B.</span>
                    <b>You log.</b> Record your baby’s sleeps directly within
                    the app
                  </div>
                  <div className="pb-3">
                    <span className="text-main_color font-bold">C.</span>
                    <b>We analyze.</b> Daily and weekly sleep insight reports
                    measure your baby’s progress
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

          <section className="flex md:flex-row flex-col-reverse my-6 md:my-0 ">
            <div className="flex md:items-center md:justify-center  px-5">
              <div className="flex flex-col md:items-center justify-center gap-3 mt-4  mb-5">
                <div className="head text-2xl">Our Mission</div>
                <div className="md:w-3/4 w-full">
                  We’re on a mission to make it easy for every family to sleep
                  better. We apply state-of-the-art technology to science-based
                  sleep understanding so that we can make quality, credible
                  sleep support accessible to everyone – because every baby and
                  their family deserve better sleep!
                </div>
                <Button text="UNLOCK BETTER SLEEP" />
              </div>
            </div>
            <img src={baby2} alt="Photo Missing" className="md:w-1/2 w-full" />
          </section>

          <section className="flex md:flex-row flex-col ">
            <img src={baby3} alt="Photo" className=" md:flex md:w-1/2 w-full" />

            <div className="flex flex-col md:justify-center md:items-center gap-4 my-5 px-6">
              <div className="fbook font-semibold text-3xl text-main_color">
                Lumi is designed for
              </div>
              <div className="fbook text-start text-lg md:w-3/4">
                <b>
                  Every parent who wants their baby to fall asleep, stay asleep,
                  and wake up happy in the morning
                </b>
                . Whether you’re struggling with sleep or simply making sure
                you’re doing what’s best for your family, we have you covered.
              </div>
              <Button />
            </div>
          </section>

          <section className="flex flex-col items-center my-5 w-full mb-16 ">
            <div className="flex  flex-col  md:w-2/5  px-5">
              <div className="text-main_color fbook text-3xl md:text-2xl  py-4   w-full text-center md:text-start ">
                We’re here to answer your questions
              </div>
              <div className="md:ml-2 px-3">
                {faqQuestions.map((text, index) => (
                  <DropdownItem key={index} text={text} />
                ))}
              </div>
              <div className="w-full   md:items-center justify-center mt-5 flex">
                <Button />
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
