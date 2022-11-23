import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sales() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 h-screen">
      <div className="h-1/5">
        <Header className="" />
        <div className="h-1/12 py-8 sm:py-0 sm:text-xl text-center font-extrabold text-4xl">
          <h2>KUBOTA SALES</h2>
        </div>
      </div>
      <div className="h-3/5 mx-2">
        <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
          <button
            type="button"
            onClick={() => {
              navigate("/equipment");
            }}
          >
            <div className="grid h-full place-items-center bg-white w-full">
              <FontAwesomeIcon
                icon="fa-solid fa-tractor"
                className="text-6xl text-brand"
              />
              <p className="uppercase font-extrabold text-2xl">Equipment</p>
              <hr className="bg-brand w-1/2 text-brand h-0.5" />
            </div>
          </button>
          <div className="grid h-full place-items-center bg-white w-full text-center">
            <FontAwesomeIcon
              icon="fa-solid fa-barcode-read"
              className="text-6xl text-brand"
            />
            <p className=" uppercase font-extrabold text-2xl">Scan QR Code</p>
            <hr className="bg-brand w-1/2 text-brand h-0.5" />
          </div>
          <div className="grid h-full place-items-center bg-white w-full">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-play"
              className="text-6xl text-brand"
            />
            <p className=" uppercase font-extrabold text-2xl">Media</p>
            <hr className="bg-brand w-1/2 text-brand h-0.5" />
          </div>
          <div className="grid h-full place-items-center bg-white w-full">
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              className="text-6xl text-brand"
            />
            <p className="uppercase font-extrabold text-2xl text-center">
              Customer Advantage
            </p>
            <hr className="bg-brand w-1/2 text-brand h-0.5" />
          </div>
          <div className="grid h-full place-items-center bg-white w-full">
            <FontAwesomeIcon
              icon="fa-solid fa-waveform-lines"
              className="text-6xl text-brand"
            />
            <p className=" uppercase font-extrabold text-2xl">Podcasts</p>
            <hr className="bg-brand w-1/2 text-brand h-0.5" />
          </div>
          <div className="grid h-full place-items-center bg-white w-full">
            <FontAwesomeIcon
              icon="fa-solid fa-calculator"
              className="text-6xl text-brand"
            />
            <p className=" uppercase font-extrabold text-2xl text-center">
              Finance Calculator
            </p>
            <hr className="bg-brand w-1/2 text-brand h-0.5" />
          </div>
        </div>
      </div>
      <div className="fixed h-1/5">
        <div className="relative h-1/2"></div>
        <div className="relative h-1/2">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Sales;
