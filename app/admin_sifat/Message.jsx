"use client";
import React, { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";

const Message = () => {
  const [allMsg, setAllMsg] = useState(null);

  useEffect(() => {
    const usersRef = ref(database, "Message");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapData = Object.entries(snapshot.val());
          setAllMsg(snapData.reverse());
        } else {
          console.log("No messages found!");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-gray-900 text-xl grid justify-center items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mt-3">
      {allMsg ? (
        allMsg.map((msg) => (
          <div
            key={msg[0]}
            className="border rounded-xl p-4 m-2 mb-4 shadow-md w-[90%] md:max-w-4xl"
          >
            <p>
              <strong>Name:</strong> {msg[1].name}
            </p>
            <p>
              <strong>Email:</strong> {msg[1].email}
            </p>
            <p>
              <strong>Phone:</strong> {msg[1].phone}
            </p>{" "}
            <br />
            <p>
              <strong>Message:</strong> {msg[1].message}
            </p>
            <br />
            <button
              type="button"
              onClick={() => {
                const checkPass = prompt("Enter 8 digit PIN: ");
                if (checkPass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
                  if (
                    confirm(
                      `Bro! Are u sure to delete ${msg[1].name}'s Message??`
                    )
                  ) {
                    fetch(
                      `${process.env.NEXT_PUBLIC_DB_URL}/Message/${msg[0]}.json`,
                      {
                        method: "DELETE",
                      }
                    )
                      .then(() => {
                        alert("Deleted the Message!!");
                      })
                      .catch(() => alert("Error! Contact with Arif Billah."));
                  } else {
                    alert("not delete, be careful bro!!");
                  }
                } else {
                  alert("Wrong PIN!!!");
                }
              }}
              className="p-3 rounded-md text-red-600 text-lg bg-red-50 ring ring-red-500"
            >
              Delete Message
            </button>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Message;
