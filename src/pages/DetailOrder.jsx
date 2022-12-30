import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { BsCalendar2Check, BsCardList } from "react-icons/bs";
import { IoAirplaneOutline } from "react-icons/io5";
import useOrder from "../services/api/useOrder";

const DetailOrder = () => {
  const { orderId } = useParams();
  const { getByOrderId, ordersUser, generateInvoice, invoice } = useOrder();
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const totalPrice = async () => {
    let price = 0;
    ordersUser.forEach((e) => {
      price += e.totalPrice;
    });
    setPrice(price);
  };
  useEffect(() => {
    getByOrderId(orderId);
  }, [orderId]);

  useEffect(() => {
    totalPrice();
  }, [ordersUser]);

  return (
    <div className="h-auto pb-20">
      <div className="container mx-auto px-10 lg:grid grid-cols-4 block mt-20 gap-x-10">
        <aside className="col-span-1 flex flex-col gap-y-4 mb-5">
          <div className="bg-[#3e5cb8] text-white lg:max-w-[300px] rounded-lg cursor-pointer" onClick={() => navigate("/account/profile")}>
            <h2 className="flex items-center pl-10 h-full min-h-[50px]">
              <FiUser className="mr-3" /> Profile
            </h2>
          </div>
          <div className="bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer" onClick={() => navigate("/account/traveler")}>
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <BsCardList className="mr-3" /> Traveler List
            </h2>
          </div>
          <div className="bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer" onClick={() => navigate("/account/orders")}>
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <BsCalendar2Check className="mr-3" /> Orders
            </h2>
          </div>
          <div className="bg-[#f1f5f5] text-[#000] lg:max-w-[300px] rounded-lg cursor-pointer">
            <h2 className="flex items-center pl-10  h-full min-h-[50px]">
              <FiLogOut className="mr-3" /> Log Out
            </h2>
          </div>
        </aside>
        <div className="col-span-3">
          <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg mb-2">
            <p className="text-xl pt-2">Order Detail</p>
            <hr className="my-2" />
            <p className="text-gray-400 py-2">
              Order Code : <span className="text-gray-500">{ordersUser[0]?.orderId.slice(0, 8).toUpperCase()}</span>
            </p>
            <p className="text-gray-500 italic py-2">
              Booked on <span>{new Date(ordersUser[0]?.orderDate).toDateString()}</span>
            </p>
          </div>
          <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg mb-2">
            <div className="flex justify-between">
              <h1 className="flex items-center text-xl ">
                <BsCardList className="mr-4 text-[#7d7d7f]" /> Traveler List
              </h1>
            </div>
            <ul className="mt-4">
              {ordersUser[0]?.travelerListName.map((e) => {
                return <li className="list-decimal ml-4">{e}</li>;
              })}
            </ul>
          </div>
          <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg mb-2">
            <div className="flex justify-between">
              <h1 className="flex items-center text-xl ">
                <IoAirplaneOutline className="mr-4 text-[#7d7d7f]" /> Flight
              </h1>
            </div>
            <hr className="my-4" />
            <div className="block lg:grid grid-cols-3 ">
              <div className="col-span-2 lg:mr-10 flex items-center justify-center">
                <div className="text-center">
                  <h1>{ordersUser[0]?.departureIATA}</h1>
                  <p>{ordersUser[0]?.departureCity}</p>
                </div>
                <div className="lg:flex grid items-center mx-5">
                  <div className="max-w-[50px] xl:min-w-[100px] h-0.5 bg-[#7d7d7f] mx-auto px-10"></div>
                  <IoAirplaneOutline className="mx-2 text-[#7d7d7f] text-3xl" />
                  <div className="max-w-[50px] xl:min-w-[100px] h-0.5 bg-[#7d7d7f] mx-auto px-10"></div>
                </div>
                <div className="text-center">
                  <h1>{ordersUser[0]?.arrivalIATA}</h1>
                  <p>{ordersUser[0]?.arrivalCity}</p>
                </div>
              </div>
              <div className="text-center lg:border-l-2 lg:pl-5">
                <h1>
                  {ordersUser[0]?.paymentType} | {ordersUser[0]?.paymentName}
                </h1>
                <button className="px-3 py-2 bg-[#DF9947] rounded-full text-white my-4">{ordersUser[0]?.status}</button>
                <p className="mb-2 text-[12px] xl:text-sm">
                  Booked on <span>{new Date(ordersUser[0]?.orderDate).toDateString()}</span>
                </p>
                <div className="bg-[#3d74eb] rounded-lg text-[#fff] flex py-4 justify-center">
                  <span>
                    {ordersUser[0]?.totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {ordersUser[0]?.status === "ACCEPT" ? (
            <a href={`https://api-flight.up.railway.app/invoice/generate?orderId=${orderId}`} className="text-end text-base mt-7 text-blue-700 underline cursor-pointer" onClick={() => generateInvoice(ordersUser[0]?.orderId)}>
              Generate Invoice
            </a>
          ) : (
            ""
          )}

          <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg">
            <h1 className="text-xl py-2">Total Price</h1>
            <div className="flex justify-between">
              <p>
                Depart : ({ordersUser[0]?.departureIATA} - {ordersUser[0]?.arrivalIATA}){" "}
              </p>
              <p>
                {price?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
