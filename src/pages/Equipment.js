import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Equipment() {
  const url = "https://www.kubotausa.com/api/default/products";
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.statusText);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 h-screen">
      <div className="sticky h-1/5 top-0">
        <Header className="" />
        <div className="h-1/12 py-4 text-left text-xl bg-white">
          <button
            type="button"
            onClick={() => {
              navigate("/sales");
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-left"
              className="mx-2 text-2xl"
            />
            <span className="font-bold text-2xl">Home</span>
          </button>
        </div>
      </div>
      <div className="h-3/5 mx-2">
        <div className="grid grid-cols-2 grid-rows-5 gap-2 h-screen">
          <div className="bg-red-300"></div>
          <div className="bg-red-300 "></div>
          <div className="bg-red-300 "></div>
          <div className="bg-red-300 "></div>
          <div className="bg-red-300 "></div>
          <div className="bg-red-300 "></div>
          <div className="bg-red-300 "></div>
          <div className="bg-red-300 "></div>
        </div>
      </div>
      <div className="fixed h-1/5 z-0">
        <div className="h-1/2"></div>
        <div className="h-1/2">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Equipment;
