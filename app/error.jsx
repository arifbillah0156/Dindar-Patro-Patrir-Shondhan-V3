"use client";

import Link from "next/link";

function ErrorPage({ statusCode }) {
  return (
    <div className="flex items-center justify-center h-screen  px-2">
      <div className="text-center">
        <h1 className="text-6xl sm:text-9xl font-extrabold text-red-600">
          {statusCode || "Error"}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          {statusCode
            ? `An error ${statusCode} occurred on the server.`
            : "An error occurred on the client."}
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Please try refreshing the page or go back to the homepage.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
