import DropdownItem from "./DropdownItem.jsx";
import Button from "./Button.jsx";

export default function FAQSection() {
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
  );
}
