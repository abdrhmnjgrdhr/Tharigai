import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import Favorite from "./Favorite";
import Profile from "./Profile";
import Cart from "./Cart";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import list from "./list";
function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const { pathname } = useLocation();
  return (
    <div className="shadow shadow-green-200 pb-4">
      <div className="flex pt-4  justify-between px-4 lg:px-0 items-center lg:justify-evenly">
        <div>
          <img
            src="https://yosuva4.github.io/ThaaragaiHtml/assets/images/logo/freshcart-logo.svg"
            alt=""
            className=" object-cover"
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-6">
            {list.map((items, index) => {
              return (
                <li
                  key={index}
                  className={
                    pathname === items.path
                      ? "text-green-400  cursor-pointer font-semibold"
                      : "text-[#2e2e2e]  cursor-pointer font-semibold"
                  }
                >
                  <Link to={items.path}>{items.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:flex gap-4 hidden ">
          <div className="w-[200px] border border-green-400 items-center rounded-lg flex justify-between px-2 h-[40px] ">
            <input
              type="search "
              className="w-full h-full outline-none border-none"
              placeholder="Search for products"
            />
            <CiSearch className="text-2xl text-green-500" />
          </div>
          <div className="w-[120px] h-[40px] flex items-center gap-2 px-2 rounded-lg border border-green-400">
            <IoLocation className="text-xl text-green-500" />
            <span className="font-semibold">Location</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="md:flex gap-4 hidden">
            <Favorite />
            <Profile />
            <Cart />
          </div>
          <FaBars
            onClick={toggleSidebar}
            className="text-2xl lg:hidden  text-green-500"
          />
        </div>
      </div>

      <div className="flex fixed bottom-0 p-2  left-0 w-full items-center justify-evenly md:hidden gap-4 ">
        <Favorite />
        <Profile />
        <Cart />
      </div>

      {/* Sidebar */}

      <div
        className={
          isSidebarOpen
            ? "bg-white h-screen lg:hidden w-full transition-all duration-300 fixed top-0 left-0"
            : " h-screen w-[80%] transition-all duration-300 fixed top-0 -left-full lg:hidden "
        }
      >
        <div className="flex flex-col gap-6">
          <div className="px-2 pt-4 flex justify-between">
            <img
              src="https://yosuva4.github.io/ThaaragaiHtml/assets/images/logo/freshcart-logo.svg"
              alt=""
              className="  object-cover"
            />
            <IoMdClose
              onClick={toggleSidebar}
              className="text-green-400 text-3xl"
            />
          </div>

          <div className="flex items-center justify-center flex-col gap-4  ">
            <div className="w-[90%] border border-green-400 items-center rounded-lg flex justify-between px-2 h-[40px] ">
              <input
                type="search "
                className="w-full h-full outline-none border-none"
                placeholder="Search for products"
              />
              <CiSearch className="text-2xl text-green-500" />
            </div>
            <div className="w-[90%] h-[40px] flex items-center justify-center gap-2 px-2 rounded-lg border border-green-400">
              <IoLocation className="text-xl text-green-500" />
              <span className="font-semibold">Location</span>
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col items-center justify-center  gap-6">
              {list.map((items, index) => {
                return (
                  <li
                    key={index}
                    className={
                      pathname === items.path
                        ? "text-green-400  cursor-pointer font-semibold"
                        : "text-[#2e2e2e]  cursor-pointer font-semibold"
                    }
                  >
                    <Link to={items.path}>{items.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
