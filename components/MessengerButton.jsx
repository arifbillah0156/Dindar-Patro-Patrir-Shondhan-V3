"use client";
import React, { useState } from "react";
import MsgIcon from "@/public/Images/facebook-messenger-icon.png";
import Image from "next/image";
const MessengerButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickRipple, setClickRipple] = useState(false);
  const handleClick = () => {
    setClickRipple(true);
    setTimeout(() => setClickRipple(false), 600);
    window.open("https://www.m.me/DeendarPatraPatrisandhan", "_blank");
  };
  return (
    <>
      <style jsx>{`
        .messenger-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
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

        .messenger-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15),
            0 0 0 0 rgba(128, 0, 128, 0.8);
          border-color: #800080;
        }

        .messenger-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #800080, #9932cc, #800080);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .messenger-button:hover::before {
          opacity: 0.1;
        }
        .messenger-button::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(128, 0, 128, 0.5) 0%,
            rgba(128, 0, 128, 0) 70%
          );
          border-radius: 50%;
          transform: scale(0);
          opacity: 0;
          transition: transform 0.6s, opacity 0.6s;
        }
        .messenger-button.clicked::after {
          transform: scale(2);
          opacity: 0;
        }
        .messenger-label {
          position: absolute;
          right: 75px;
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
        .messenger-button:hover + .messenger-label {
          opacity: 1;
          transform: translateX(0);
        }
        .messenger-label::before {
          content: "";
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid #ffffff;
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
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .chat-bubble {
          position: absolute;
          top: -15px;
          left: -15px;
          width: 25px;
          height: 25px;
          background: #800080;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
        }
        .messenger-button:hover .chat-bubble {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
      <div
        className={`messenger-button ${clickRipple ? "clicked" : ""}`}
        title="আমাদের সাথে Messenger-এ চ্যাট করুন"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="messenger-icon-wrapper">
          <Image src={MsgIcon} width={35} height={35} alt="Messenger Icon" />
          <div className="notification-dot">1</div>
        </div>
      </div>
      <div className="messenger-label">Chat with us on Messenger</div>
    </>
  );
};
export default MessengerButton;
