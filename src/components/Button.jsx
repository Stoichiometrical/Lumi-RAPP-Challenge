export default function Button({ text = "GET STARTED" }) {
  return (
    <button className="m-1 p-3 bg-sec_color rounded-lg font-bold text-center  px-9 fbold   w-full ">
      {text}
    </button>
  );
}
