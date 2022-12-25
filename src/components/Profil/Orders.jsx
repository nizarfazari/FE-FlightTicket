import { useEffect } from "react";
import { BsCalendar2Check } from "react-icons/bs";
import { IoAirplaneOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useOrder from "../../services/api/useOrder";
const Orders = () => {
  const { getOrderUser, getByStatus, ordersUser } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    getOrderUser();
  }, [])
  console.log(ordersUser)

  return (
    <div>
      <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg ">
        <div>
          <h1 className="flex items-center text-2xl ">
            <BsCalendar2Check className="mr-4" /> Orders
          </h1>
          <hr className="my-4" />
          <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <button className="px-4 py-3 bg-[#3e5cb8] rounded-full text-white" onClick={() => getByStatus("ACCEPT")}>Confirmed</button>
              <button className="px-4 py-3 bg-[#fff] rounded-full "  onClick={() => getOrderUser()} >Completed</button>
              <button className="px-4 py-3 bg-[#fff] rounded-full "  onClick={() => getByStatus("WAITING")} >Waiting</button>
              <button className="px-4 py-3 bg-[#fff] rounded-full " onClick={() => getByStatus("CANCELED")}>Cancelled</button>
            </div>
          </div>
        </div>
      </div>
      { ordersUser.map((item) => {
        return (
          <div key={item.orderId} className="bg-[#f1f5f5] px-10 py-4 mt-10 rounded-lg cursor-pointer" onClick={() => navigate(`/account/orders/${item.orderId}`)} >
        <h1 className="flex items-center text-xl ">
          <IoAirplaneOutline className="mr-4 text-[#7d7d7f]" /> Flight
        </h1>
        <hr className="my-4" />
        <div className="block lg:grid grid-cols-3 ">
          <div className="col-span-2 lg:mr-10 flex items-center justify-center">
            <div className="text-center">
              <p>{item.departureCity}</p>
            </div>
            <div className="lg:flex grid items-center mx-5">
              <div className="max-w-[50px] xl:min-w-[100px] h-0.5 bg-[#7d7d7f] mx-auto px-10"></div>
              <IoAirplaneOutline className="mx-2 text-[#7d7d7f] text-3xl" />
              <div className="max-w-[50px] xl:min-w-[100px] h-0.5 bg-[#7d7d7f] mx-auto px-10"></div>
            </div>
            <div className="text-center">
              <p>{item.arrivalCity}</p>
            </div>
          </div>
          <div className="text-center lg:border-l-2 lg:pl-5">
            <h1> Code</h1>
            <p>{(item.orderId).slice(0,8)}</p>
            <button className="px-3 py-2 bg-[#DF9947] rounded-full text-white my-4">{item.status}</button>
            <div className="bg-[#3d74eb] rounded-lg text-[#fff]">
              <h1>Price</h1>
              <span>Rp {item.totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
        )
      }) }
      
    </div>
  );
};

export default Orders;
