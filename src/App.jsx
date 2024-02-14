import Navbar from "./components/Navbar.jsx";
import home_herp from "./assets/Images/home-banner1-desktop.jpg";
import home_mobile from "./assets/Images/home-banner1-mobile.jpg";
import Button from "./components/Button.jsx";
import baby from "./assets/Images/how-it-works-desktop.jpg";
import baby2 from "./assets/Images/our-mission.jpg";
import baby3 from "./assets/Images/lumi-designed-for.jpg";
import DropdownItem from "./components/DropdownItem.jsx";

function App() {
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
    <>
      <Navbar />
      <div className="relative h-auto">
        <img src={home_herp} className="object-cover" alt="background" />
        <div className="absolute w-1/4 flex flex-col gap-2 top-1/3  right-28">
          <div className="rounded-xl home-tank bg-neutral-950 bg-opacity-55 p-4 text-white">
            <div className="cont text-3xl">
              Your baby can be a super sleeper
            </div>
            <div className="fregular text-lg">
              Lumi’s app-bases sleep coaching and tracking tools will have your
              baby sleeping better in just 7 days
            </div>
          </div>

          <div className="">
            <Button text="GET STARTED" />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <img src={baby} alt="Photo Missing" className=" " />
        </div>

        <div className="flex  items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="head">How it works</div>
            <div className="">
              <div className="font-bold">Lumi’s A, B, Cs, to better Zzzzs</div>
              <div className="">
                <span className="text-main_color">A.</span>
                We coach. Our Pediatric sleep experts will take you step-by-step
                to sleep success
              </div>
              <div className="">
                <span className="text-main_color">B.</span>
                You log. Record your baby’s sleeps directly within the app
              </div>
              <div className="">
                <span className="text-main_color">C.</span>
                We analyze. Daily and weekly sleep insight reports measure your
                baby’s progress
              </div>
            </div>
            <div className="text-main_color font-bold">
              Zzzzz your baby sleeps!
            </div>
            <div className="">
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="head">Our Mission</div>
            <div className="w-3/4">
              We’re on a mission to make it easy for every family to sleep
              better. We apply state-of-the-art technology to science-based
              sleep understanding so that we can make quality, credible sleep
              support accessible to everyone – because every baby and their
              family deserve better sleep!
            </div>
            <Button text="UNLOCK BETTER SLEEP" />
          </div>
        </div>
        <img src={baby2} alt="Photo Missing" className="w-1/2" />
      </div>

      <div className="flex">
        <img src={baby3} alt="" className="w-1/2" />

        <div className="flex flex-col justify-center items-center gap-4">
          <div className="fbook font-semibold text-4xl text-main_color">
            Lumi is designed for
          </div>
          <div className="fbook text-start text-lg w-3/4">
            <b>
              Every parent who wants their baby to fall asleep, stay asleep, and
              wake up happy in the morning
            </b>
            . Whether you’re struggling with sleep or simply making sure you’re
            doing what’s best for your family, we have you covered.
          </div>
          <Button />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-5  ">
        <div className="flex  flex-col  ">
          <div className="text-main_color fbook text-2xl  py-4">
            We’re here to answer your questions
          </div>
          <div className="ml-2">
            {faqQuestions.map((text, index) => (
              <DropdownItem key={index} text={text} />
            ))}
          </div>
        </div>

        <Button />
      </div>
    </>
  );
}

export default App;
