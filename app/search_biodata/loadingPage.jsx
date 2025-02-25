import React from "react";

export default function LoadingSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      <span className="ml-4 text-blue-500 font-semibold text-lg">
        Loading...
      </span>
    </div>
  );
}
