import React from "react";
import logo from "@assets/Logo.png";
import UserProfile from "@components/userprofile";
const Navbar = () => {
  return (
    <div className="bg-primary">
      <header className=" px-2 sm:px-6 lg:px-8 text-blackish  flex justify-between  text-sm py-4">
        <div className="flex items-center">
          <div className="w-10 mr-4">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <span className="font-semibold font-vietnam text-2xl">
            Village Record Book
          </span>
        </div>
        <UserProfile />
      </header>
    </div>
  );
};

export default Navbar;
