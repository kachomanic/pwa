import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-screen p-1 bg-white border-2 border-gray-300 h-full">
      <div className="grid grid-cols-4 grid-rows-1 gap-1 text-center mt-2">
        <button
          type="button"
          onClick={() => {
            navigate("/sales");
          }}
        >
          <div className="w-full">
            <FontAwesomeIcon
              icon="fa-solid fa-house-chimney"
              className="text-2xl text-gray-400"
            />
            <p className="text-gray-400">Home</p>
          </div>
        </button>
        <div className="w-full">
          <FontAwesomeIcon
            icon="fa-solid fa-user"
            className="text-2xl text-gray-400"
          />
          <p className="text-gray-400">Customer</p>
        </div>
        <div className="w-full">
          <FontAwesomeIcon
            icon="fa-solid fa-bell"
            className="text-2xl text-gray-400"
          />
          <p className="text-gray-400">Alerts</p>
        </div>
        <div className="w-full">
          <FontAwesomeIcon
            icon="fa-solid fa-barcode-read"
            className="text-2xl text-gray-400"
          />
          <p className="text-gray-400 leading-5">Scan QR Code</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
