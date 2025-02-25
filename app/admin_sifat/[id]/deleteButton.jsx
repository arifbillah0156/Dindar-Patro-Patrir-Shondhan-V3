"use client";

export default function DeleteButton({ dataName, dataUserName }) {
  const deleteBiodata = () => {
    const checkPass = prompt("Enter 8 digit PIN: ");
    if (checkPass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      if (confirm(`Bro! Are u sure to delete ${dataUserName}'s Biodata??`)) {
        fetch(`${process.env.NEXT_PUBLIC_DB_URL}/AllBiodata/${dataName}.json`, {
          method: "DELETE",
        })
          .then(() => {
            alert("Deleted the Biodata!!");
            location.replace("/all_biodata");
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
      className="px-1 py-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 active:bg-red-700 transition-all duration-300 ease-in-out text-xl  overflow-hidden"
    >
      Delete
    </button>
  );
}
