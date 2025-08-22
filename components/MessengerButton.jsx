"use client";
import React from "react";
import MsgIcon from "@/public/Images/facebook-messenger-icon.png";
import Image from "next/image";

const MessengerButton = () => {
  return (
    <>
      <style jsx>{`
        .messenger-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          background-color: #ffffff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: pulse 2s infinite;
        }

        .messenger-button:hover {
          transform: scale(1.1);
          box-shadow: -6px 6px 14px rgba(0, 0, 0, 0.3);
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

      <div
        className="messenger-button"
        title="আমাদের সাথে Messenger-এ চ্যাট করুন"
        onClick={() =>
          window.open("https://www.m.me/DeendarPatraPatrisandhan", "_blank")
        }
      >
        <Image src={MsgIcon} width={30} height={30} alt="Messenger Icon" />
      </div>
    </>
  );
};

export default MessengerButton;
