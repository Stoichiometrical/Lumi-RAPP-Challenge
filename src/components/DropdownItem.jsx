import arrow from "../assets/Icons/arrow.png";
import { IoIosArrowDown } from "react-icons/io";

export default function DropdownItem({ text }) {
  return (
    <div className="flex  px-2 py-3  border-b border-gray-300 gap-2 items-center mb-2  justify-between ">
      <div className="fbook text-lg text-main_color  ">{text}</div>
      <IoIosArrowDown className="text-gray-300 text-2xl cursor-pointer" />
    </div>
  );
}
