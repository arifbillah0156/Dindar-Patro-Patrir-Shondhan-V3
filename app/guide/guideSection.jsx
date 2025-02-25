export default function GuideSection({ header, text }) {
  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 underline decoration-double underline-offset-4">
        {header}
      </h2>
      <p className="text-gray-700 text-lg first-letter:text-4xl first-letter:text-blue-600 indent-4">
        {text}
      </p>
    </section>
  );
}
