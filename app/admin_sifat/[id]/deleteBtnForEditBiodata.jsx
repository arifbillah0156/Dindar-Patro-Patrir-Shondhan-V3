"use client";

export default function DeleteButtonForEditBiodata({ dataName, dataUserName }) {
  const deleteBiodata = () => {
    const checkPass = prompt("Enter 8 digit PIN: ");
    if (checkPass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      if (confirm(`Bro! Are u sure to delete ${dataUserName}'s Biodata??`)) {
        fetch(
          `${process.env.NEXT_PUBLIC_DB_URL}/ApprovedBiodata/${dataName}.json`,
          {
            method: "DELETE",
          }
        )
          .then(() => {
            alert("Deleted the Biodata, check please!!");
          })
          .catch(() => alert("Error! Contact with Arif Billah."));
      } else {
        alert("not delete, be careful bro!!");
      }
    } else {
      alert("Wrong PIN!!!");
    }
  };

  return (
    <button
      onClick={deleteBiodata}
      className="px-6 py-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 active:bg-red-700 transition-all duration-300 ease-in-out text-xl  overflow-hidden"
    >
      Delete
    </button>
  );
}
