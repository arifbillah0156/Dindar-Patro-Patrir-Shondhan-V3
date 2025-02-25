export default function Text2({ text, value }) {
  return (
    <div className="text-center">
      <p className="min-w-[40%] text-gray-900 font-semibold px-1 border-gray-300 text-lg md:text-xl pt-3">
        {text}{" "}
      </p>
      <p>{"↕"}</p>
      <p className="min-w-[60%] text-gray-900 px-1 pl-2  border-gray-300 text-lg md:text-xl pb-1">
        {value}{" "}
      </p>
    </div>
  );
}
