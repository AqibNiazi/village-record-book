import React from "react";
import logo from "@assets/Logo.png";
import UserProfile from "@components/userprofile";
import { toggleSidebar } from "@store/slices/sidebarSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-primary">
      <header className=" px-2 sm:px-6 lg:px-8 text-blackish  flex justify-between  text-sm py-2 md:py-4">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          onClick={() => dispatch(toggleSidebar())}
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <div className="w-10 mr-4">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <span className="font-semibold font-vietnam text-2xl hidden sm:block">
            Village Record Book
          </span>
        </div>
        <UserProfile />
      </header>
    </div>
  );
};

export default Navbar;
