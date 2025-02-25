export default function Text({ text, value }) {
  return (
    <div>
      <span className="font-semibold text-gray-800 text-xl">{text}: </span>
      <span className="text-gray-700 text-lg">{value}</span>
    </div>
  );
}
