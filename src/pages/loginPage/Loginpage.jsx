import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Logos } from "../../assets/images/login/index_img";
import "./login.css";

const Loginpage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="" style={{ background: "linear-gradient(121.74deg, #2c4284 .97%, #3e5cb8 54.61%, #4a6fde 99.48%)" }}>
      <div className="wrapper-form-login flex flex-col items-center min-h-[100vh] container mx-auto">
        <a href="/" className="cursor-pointer no-underline mb-[20px]">
          <img className="w-64" src={Logos} alt="" />
        </a>
        <div className="login-form-box w-[590px] overflow-hidden text-base rounded-md">
          <div className="panel-1 p-[50px_50px_20px_50px] bg-white text-[#59595b] relative block">
            <form className="login-form">
              <h1 className="mb-[30px] text-[18px] leading-[25px] font-bold">Login</h1>
              {/* Email */}
              <div className="email-form mb-[20px]">
                <label className="email-label text-[#59595b] text-[0.875rem] font-normal block">Email</label>
                <div className="email-control box-border clear-both text-base relative text-left">
                  <input
                    type="email"
                    maxLength
                    placeholder="james@gmail.com"
                    className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] text-[#59595b] shadow-none h-[32px] text-[14px] leading-[20px] font-normal w-full max-w-full inline-flex items-center relative align-top active:outline-none focus:outline-none"
                  />
                </div>
              </div>
              {/* Password */}
              <div className="password-form mb-[50px]">
                <label className="password-label text-[#59595b] text-[0.875rem] font-normal block">Password</label>
                <div className="password-control box-border clear-both text-base relative text-left">
                  <input
                    type={showPass ? "text" : "password"}
                    maxLength
                    placeholder="Password"
                    className="pl-0 bg-transparent rounded-none border-b border-solid border-[#dedede] text-[#59595b] shadow-none h-[32px] text-[14px] leading-[20px] font-normal w-full max-w-full inline-flex items-center relative align-top active:outline-none focus:outline-none"
                  />
                  <div onClick={() => setShowPass(!showPass)} className="pointer-events-auto cursor-pointer right-0 h-[32px] text-[#dbdbdb] absolute top-0 w-[32px] z-[4] inline-flex items-center justify-center align-[-0.125em]">
                    {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>
              {/* Button Sign Up */}
              <button className="button-signup p-[15px_25px] text-[18px] leading-[25px] border-none rounded-md flex w-full bg-[#3e5cb8] text-white shadow-md mb-[20px] font-bold touch-manipulation transition-shadow duration-[0.25s] will-change-[box-shadow] relative cursor-pointer justify-center text-center whitespace-nowrap items-center align-top hover:shadow-none hover:bg-[#3855aa]">
                <span className="text-[18px] leading-[25px] font-normal">Sign Up</span>
              </button>
              {/* Button Google */}
              <button className="button-google p-[15px_25px] text-[18px] leading-[25px] border-none flex w-full shadow-md mt-[30px] font-bold touch-manipulation transition-shadow duration-[.25s] will-change-[box-shadow] relative text-[#9a9a9d] cursor-pointer justify-center text-center whitespace-nowrap bg-white items-center align-top hover:shadow-sm hover:text-[#59595b]">
                <img src="https://cdn.airpaz.com/nuxt/8584e352a276fbbc255e780a7b081934.svg" alt="" className="icon-google w-[20px] mr-[5px] h-[1.5em] relative inline-flex items-center justify-center align-[-0.125em]" />
                <span className="text-[18px] leading-[25px] font-bold ml-1">Sign in with Google</span>
              </button>
            </form>
          </div>
          <div className="bg-[#f7f7f7] border-b-0 border-r-0 border-l-0 p-[30px] rounded-b-md text-[#59595b] block text-center">
            <p className="text-[14px] leading-[20px] font-normal">
              Not an Airsanz member?{" "}
              <span className="ml-[3px]">
                <a href="/" className="cursor-pointer text-[#59595b] font-bold">
                  Sign up now
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;