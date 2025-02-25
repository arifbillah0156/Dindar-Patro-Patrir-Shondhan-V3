import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center px-6">
        <h1 className="text-6xl sm:text-9xl font-extrabold text-gray-900 tracking-widest">
          404
        </h1>
        <div className="bg-red-500 px-2 py-1 text-sm text-white rounded rotate-12 absolute">
          Page Not Found
        </div>
        <div className="mt-10">
          <p className="text-lg text-gray-600">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block px-5 py-3 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
