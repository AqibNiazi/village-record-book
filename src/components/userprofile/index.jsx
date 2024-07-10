import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Avatar from "@assets/avatar.png";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuItems = [
    {
      to: "",
      text: "My Profile",
      onClick: () => setIsOpen(false),
    },
    {
      to: "",
      text: "Logout",
      onClick: () => setIsOpen(false),
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFocusChange = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className={`flex items-center focus:outline-none text-sm pe-1 font-medium rounded-full hover:text-primary`}
        type="button"
        onClick={toggleDropdown}
        onBlur={handleFocusChange}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10 h-10 md:mr-2 rounded-full"
          src={Avatar}
          alt="user avatar"
        />
        <div className="hidden md:flex flex-col items-start mr-3">
          <span className="text-base font-vietnam text-blackish">
            justin j.
          </span>
          <span className="text-xs font-vietnam text-grayish">Ward</span>
        </div>
        {isOpen ? (
          <IoIosArrowUp className="w-5 h-5 hidden md:block" />
        ) : (
          <IoIosArrowDown className="w-5 h-5 hidden md:block" />
        )}
      </button>

      {isOpen && (
        <div
          id="dropdownAvatarName"
          className="absolute right-0 mt-2 top-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md shadow-gray-300"
          ref={dropdownRef}
        >
          <ul
            className="text-sm text-blackish w-40"
            aria-labelledby="dropdownAvatarNameButton"
          >
            {menuItems.map((menuItem, index) => (
              <li key={index} className="border-b border-gray-300">
                <Link
                  className="block w-full text-left p-2 font-normal font-vietnam text-blackish"
                  onClick={() => {
                    setIsOpen(false);
                    if (menuItem.onClick) {
                      menuItem.onClick();
                    }
                  }}
                >
                  {menuItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
