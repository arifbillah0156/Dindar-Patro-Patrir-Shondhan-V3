"use client";
import React, { useState } from "react";
import MsgIcon from "@/public/Images/facebook-messenger-icon.png";
import Image from "next/image";

const MessengerButton = () => {
  const [clickRipple, setClickRipple] = useState(false);

  const handleClick = () => {
    setClickRipple(true);
    setTimeout(() => setClickRipple(false), 600);
    window.open("https://www.m.me/DeendarPatraPatrisandhan", "_blank");
  };

  return (
    <>
      <style jsx>{`
        .messenger-wrapper {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          align-items: center;
          z-index: 9999;
        }

        .messenger-label {
          margin-right: 10px;
          background: #ffffff;
          color: #333;
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #e0e0e0;
        }
        .messenger-wrapper:hover .messenger-label {
          opacity: 1;
          transform: translateX(0);
        }
        .messenger-label::after {
          content: "";
          position: absolute;
        }

        .messenger-button {
          width: 65px;
          height: 65px;
          background-color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 2px solid #e0e0e0;
          animation: pulse-animation 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          position: relative;
        }

        @keyframes pulse-animation {
          0% {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1),
              0 0 0 0 rgba(128, 0, 128, 0.7);
          }
          70% {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1),
              0 0 0 20px rgba(128, 0, 128, 0);
          }
          100% {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1),
              0 0 0 0 rgba(128, 0, 128, 0);
          }
        }

        .messenger-icon-wrapper {
          position: relative;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .messenger-button:hover .messenger-icon-wrapper {
          transform: scale(1.1);
        }

        .notification-dot {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 18px;
          height: 18px;
          background: #ff3b30;
          border-radius: 50%;
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
          font-weight: bold;
        }
      `}</style>

      <div className="messenger-wrapper">
        <div className="messenger-label">Messenger-এ চ্যাট করুন</div>
        <div
          className={`messenger-button ${clickRipple ? "clicked" : ""}`}
          title="আমাদের সাথে Messenger-এ চ্যাট করুন"
          onClick={handleClick}
        >
          <div className="messenger-icon-wrapper">
            <Image src={MsgIcon} width={35} height={35} alt="Messenger Icon" />
            <div className="notification-dot">1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessengerButton;
