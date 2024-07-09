import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Avatar from "@assets/avatar.png";
const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  //   const menuItems = [
  //     {
  //       to: "/my-profile",
  //       icon: profile,
  //       text: t("my_profile"),
  //       onClick: () => setIsOpen(false),
  //     },
  //     {
  //       to: "/my-ads",
  //       icon: myAds,
  //       text: t("my_ads"),
  //       onClick: () => setIsOpen(false),
  //     },
  //     {
  //       to: "/my-favourites",
  //       icon: favourits,
  //       text: t("favourites"),
  //       onClick: () => setIsOpen(false),
  //     },
  //     {
  //       to: "my-searches",
  //       icon: mysearch,
  //       text: t("my_searches"),
  //       onClick: () => setIsOpen(false),
  //     },
  //     {
  //       to: "/account-settings",
  //       icon: settings,
  //       text: t("account_settings"),
  //       onClick: () => setIsOpen(false),
  //     },
  //     {
  //       to: "/chats",
  //       icon: chats,
  //       text: t("chats"),
  //       onClick: () => setIsOpen(false),
  //     },
  //     {
  //       icon: logout,
  //       text: t("logout"),
  //       onClick: onLogout,
  //     },
  //   ];

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
        className={`flex items-center text-sm pe-1 font-medium rounded-full hover:text-primary`}
        type="button"
        onClick={toggleDropdown}
        onBlur={handleFocusChange}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10 h-10 mr-2 rounded-full"
          src={Avatar}
          alt="user avatar"
        />
        <div className="flex flex-col items-start mr-3">
          <span className="text-base font-vietnam text-blackish ">
            justin j.
          </span>
          <span className="text-xs font-vietnam text-grayish">Ward</span>
        </div>
        <IoIosArrowDown className="w-5 h-5" />
      </button>

      {isOpen && (
        <div
          id="dropdownAvatarName"
          className="absolute mt-2 top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md shadow-gray-300 w-48"
          ref={dropdownRef}
        >
          <ul
            className="text-sm text-black"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            {/* {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className="border-b  font-Montserrat font-normal border-gray-300"
              >
                <Link
                  to={menuItem.to}
                  className="flex justify-start items-center p-2"
                  onClick={() => {
                    setIsOpen(false);
                    if (menuItem.onClick) {
                      menuItem.onClick();
                    }
                  }}
                >
                  <img src={menuItem.icon} alt={menuItem.text} />
                  <span>{menuItem.text}</span>
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserProfile;
