export default function FormLabel({ text, require }) {
  return (
    <>
      <label className="block text-xl font-medium text-purple-900 mt-2">
        {text} {require ? <span className="text-red-600">*</span> : ""}
      </label>
    </>
  );
}
