import React, { useEffect, useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { SiChinasouthernairlines } from "react-icons/si";

import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";

import { RiSuitcase2Line } from "react-icons/ri";

import { useNavigate, useParams } from "react-router-dom";
import useSchedule from "../services/api/useSchedule";

const Resultpage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const params = useParams();
  console.log(params);
  const { schedule } = useSchedule();
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <section className="bg-[#3d74eb]">
        <div className="py-5 container mx-auto px-10 ">
          <div className="flight-header flex items-center">
            <div className="flight-header-item flex flex-1 text-white">
              <div className="icon pr-4 inline-flex relative items-center justify-center align-[-0.125rem]">
                <GiAirplaneDeparture size="2rem" />
              </div>
              <div className="description ">
                <p className="text-lg font-medium">Select Departure Flight</p>
                <p className="text-base font-light">
                  <span>KNO -JKT</span>
                  <span className="px-1"> | </span> Wed, 24 Nov
                </p>
              </div>
            </div>
            <div className="flight-header-item">
              <button onClick={() => setShowForm(!showForm)} onCLi className="text-base text-white rounded-md border bg-transparent border-white border-solid flex w-full py-2 px-6 ">
                Change Search
              </button>
            </div>
          </div>
          <div className={showForm ? "flight-form flex py-10 mx-10" : "hidden"}>
            <div className="flight-header-form-item flex flex-1">
              <div className="type-flight flex gap-3">
                <button>One Way</button>
                <button>Round Trip</button>
              </div>
            </div>
            <form className="form-box"></form>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto p-10 ">
          <div className="flex flex-col  bg-[#f1f5f5] rounded-md ">
            <div className="flex flex-row justify-between items-center border-b border-gray-300">
              <div className="mx-5 py-2">
                <p className="font-semibold text-xl mb-1">Departure Flight to Test</p>
                <p className="text-base font-light pb-2">
                  Wed 24 Nov 2022 <span> | </span> 1 Traveler
                </p>
              </div>
              <div className="mx-8">
                <button className="text-base font-medium text-gray-500 rounded-md w-full py-2 px-6 bg-gray-200 hover:bg-gray-100" onClick={() => setShowDate(!showDate)}>
                  Change Date
                </button>
              </div>
            </div>
            <div className={showDate ? "flex justify-center my-2 pt-2" : "hidden"}>
              <div className="bg-[#f1f5f5]">
                <h1>Coming Soon</h1>
              </div>
            </div>

            <div className="flex flex-1 justify-between items-center mt-2">
              <div className="flex flex-row items-center list-filter gap-2 mx-5 py-2">
                <p>Filter: </p>
                <div className="flex button-filter gap-3">
                  <div className="button-filter flex bg-gray-200 rounded-md items-center px-2 py-1 gap-2">
                    <button>Price</button>
                    <AiOutlineDown />
                  </div>
                  <button>Stops</button>
                  <button>Airlines</button>
                  <button>Departure</button>
                </div>
              </div>
              <div className="flex filter-sort gap-2 mx-5">
                <p>Sort: </p>
                <button>Sorting</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 mt-3">
            <div className="flex flex-row justify-between items-center gap-4 bg-[#f1f5f5] rounded-md">
              <div className="wrapper-list-ticket flex items-center px-5 py-8">
                <div className="logo-maskapai mx-4">
                  <SiChinasouthernairlines size="2.5rem" />
                  <p className="text-sm">brand air</p>
                </div>
                <div className="departure mx-4 ml-12">
                  <p className="font-semibold text-xl">07.30</p>
                  <p className="font-light text-sm">TD</p>
                </div>
                <AiOutlineArrowRight size="1.2rem" className="text-gray-400 mx-2" />
                <div className="arrival mx-4">
                  <p className="font-semibold text-xl">07.30</p>
                  <p className="font-light text-sm">SASD</p>
                </div>
                <div className="duration mx-8 ml-16">
                  <p className="font-semibold text-xl">1H 30M</p>
                  <p className="font-light text-sm">Direct</p>
                </div>
                <div className="flex items-center mx-8">
                  <RiSuitcase2Line size="1.2rem" />
                  <p className="font-light">20kg</p>
                </div>
                <div className="price mx-8 ml-24">
                  <p className="font-semibold text-xl">Rp 2220</p>
                </div>
              </div>
              <div className="button-choose mr-12">
                <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600" onClick={() => navigate("/flight")}>
                  Choose Flight
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-4 bg-[#f1f5f5] rounded-md">
              <div className="wrapper-list-ticket flex items-center px-5 py-8">
                <div className="logo-maskapai mx-4">
                  <SiChinasouthernairlines size="2.5rem" />
                  <p className="text-sm">brand air</p>
                </div>
                <div className="departure mx-4 ml-12">
                  <p className="font-semibold text-xl">07.30</p>
                  <p className="font-light text-sm">TD</p>
                </div>
                <AiOutlineArrowRight size="1.2rem" className="text-gray-400 mx-2" />
                <div className="arrival mx-4">
                  <p className="font-semibold text-xl">07.30</p>
                  <p className="font-light text-sm">SASD</p>
                </div>
                <div className="duration mx-8 ml-16">
                  <p className="font-semibold text-xl">1H 30M</p>
                  <p className="font-light text-sm">Direct</p>
                </div>
                <div className="flex items-center mx-8">
                  <RiSuitcase2Line size="1.2rem" />
                  <p className="font-light">20kg</p>
                </div>
                <div className="price mx-8 ml-24">
                  <p className="font-semibold text-xl">Rp 2220</p>
                </div>
              </div>
              <div className="button-choose mr-12">
                <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600" onClick={() => navigate("/flight")}>
                  Choose Flight
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-4 bg-[#f1f5f5] rounded-md">
              <div className="wrapper-list-ticket flex items-center px-5 py-8">
                <div className="logo-maskapai mx-4">
                  <SiChinasouthernairlines size="2.5rem" />
                  <p className="text-sm">brand air</p>
                </div>
                <div className="departure mx-4 ml-12">
                  <p className="font-semibold text-xl">07.30</p>
                  <p className="font-light text-sm">TD</p>
                </div>
                <AiOutlineArrowRight size="1.2rem" className="text-gray-400 mx-2" />
                <div className="arrival mx-4">
                  <p className="font-semibold text-xl">07.30</p>
                  <p className="font-light text-sm">SASD</p>
                </div>
                <div className="duration mx-8 ml-16">
                  <p className="font-semibold text-xl">1H 30M</p>
                  <p className="font-light text-sm">Direct</p>
                </div>
                <div className="flex items-center mx-8">
                  <RiSuitcase2Line size="1.2rem" />
                  <p className="font-light">20kg</p>
                </div>
                <div className="price mx-8 ml-24">
                  <p className="font-semibold text-xl">Rp 2220</p>
                </div>
              </div>
              <div className="button-choose mr-12">
                <button className="bg-blue-700 text-sm font-medium text-white rounded-md py-2 px-2 hover:bg-blue-600" onClick={() => navigate("/flight")}>
                  Choose Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resultpage;
