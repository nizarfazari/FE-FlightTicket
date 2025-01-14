import Button1 from "../Buttons/Button1";

import { useNavigate } from "react-router-dom";
import Dropdown1 from "../Dropdown/Dropdown1";
import Notification from "../Dropdown/Notification";
import Navphone from "./Navphone";
import { logo_blue } from "../../assets/images/logo";
import { useEffect } from "react";
import useNotification from "../../services/api/useNotification";
const Navbar = ({ nav, notif }) => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {
  //   postNotification(user.userId);
  // }, [user.userId]);

  return (
    <nav className={`${nav}`}>
      <div className="flex justify-between container mx-auto px-10 h-20 items-center">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer w-40" onClick={() => navigate("/")}>
            <img src={logo_blue} alt="" />
          </div>
          <ul className="nav-right flex gap-x-5 m-0 items-center pl-10 hidden sm:flex">
            <li className="cursor-pointer">
              <a className="">Flight</a>
            </li>
            <li className="cursor-pointer">
              <a className="">Order</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center hidden sm:flex">
          {!token ? (
            <div className="">
              <Button1 name="Login" style="rounded-lg" onclick={() => navigate("/login")} />
            </div>
          ) : (
            <div className="profil flex items-center">
              <div className="relative">
                <Notification style={notif} />
              </div>
              <Dropdown1 name={user.fullName || user.givenName} />
            </div>
          )}
          {/* <div className="">
            <Button1 name="Login" style="rounded-lg" onclick={() => navigate("/login")} />
          </div>
          <div className="profil flex items-center hidden">
            <div className="relative">
              <Notification style={notif} />
            </div>
            <Dropdown1 />
          </div> */}
        </div>
        <div className="block sm:hidden relative">
          <Navphone />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
