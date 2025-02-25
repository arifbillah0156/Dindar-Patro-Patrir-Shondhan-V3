export default function Text({ text, value }) {
  return (
    <div className="flex text-start">
      <p className="min-w-[40%] text-gray-900 font-semibold  border-gray-300 py-3  pb-4 md:text-lg">
        {text}{" "}
      </p>
      <p className="min-w-[60%] text-gray-900  pl-2 py-3 border-gray-300 pb-4  md:text-lg text-justify">
        {"↔ "} {value}{" "}
      </p>
    </div>
  );
}
