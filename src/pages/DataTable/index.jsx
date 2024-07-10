import React, { useState } from "react";
import { PiChartBarHorizontal } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Agriculture,
  Sport,
  Phone,
  Plane,
  Warning,
  BusinessLine,
  HeartHand,
  GraduationHat,
  ActivityHeart,
  Train,
  GovtService,
  Location,
  GovtTownCity,
  Coins,
  WardMarket,
  CheckList,
  Villages,
  Clan,
} from "@components/appIcons";

const Dashboard = () => {
  const location = useLocation();
  const isSidebarVisible = useSelector((state) => state.sidebar.isSidebarOpen);
  const [activeButton, setActiveButton] = useState("data");

  const sidebarData = [
    {
      id: uuidv4(),
      icon: <FiUsers className="w-4 h-4" />,
      link: "/population",
      text: "Ward Population",
    },
    {
      id: uuidv4(),
      icon: <Agriculture className="w-5 h-5" />,
      link: "/population",
      text: "Agriculture",
    },
    {
      id: uuidv4(),
      icon: <Sport className="w-5 h-5" />,
      link: "/population",
      text: "Sports",
    },
    {
      id: uuidv4(),
      icon: <Plane className="w-5 h-5" />,
      link: "/population",
      text: "Tourism",
    },
    {
      id: uuidv4(),
      icon: <Warning className="w-5 h-5" />,
      link: "/population",
      text: "Cross Cutting Issues",
    },
    {
      id: uuidv4(),
      icon: <BusinessLine className="w-5 h-5" />,
      link: "/population",
      text: "Business Activity",
    },
    {
      id: uuidv4(),
      icon: <Phone className="w-5 h-5" />,
      link: "/population",
      text: "Communication Facilities",
    },
    {
      id: uuidv4(),
      icon: <HeartHand className="w-5 h-5" />,
      link: "/population",
      text: "Community Projects",
    },
    {
      id: uuidv4(),
      icon: <GraduationHat className="w-5 h-5" />,
      link: "/population",
      text: "Education",
    },
    {
      id: uuidv4(),
      icon: <ActivityHeart className="w-5 h-5" />,
      link: "/population",
      text: "Health",
    },
    {
      id: uuidv4(),
      icon: <Train className="w-5 h-5" />,
      link: "/population",
      text: "Transport",
    },
    {
      id: uuidv4(),
      icon: <GovtService className="w-5 h-5" />,
      link: "/population",
      text: "Government Services",
    },
    {
      id: uuidv4(),
      icon: <Location className="w-5 h-5" />,
      link: "/population",
      text: "Government Station",
    },
    {
      id: uuidv4(),
      icon: <GovtTownCity className="w-5 h-5" />,
      link: "/population",
      text: "Government Town City",
    },
    {
      id: uuidv4(),
      icon: <Coins className="w-5 h-5" />,
      link: "/population",
      text: "Ward's Assets",
    },
    {
      id: uuidv4(),
      icon: <WardMarket className="w-5 h-5" />,
      link: "/population",
      text: "Ward's Markets",
    },
    {
      id: uuidv4(),
      icon: <WardMarket className="w-5 h-5" />,
      link: "/population",
      text: "Ward's Movement",
    },
    {
      id: uuidv4(),
      icon: <CheckList className="w-5 h-5" />,
      link: "/population",
      text: "Ward's Visitor Registration",
    },
    {
      id: uuidv4(),
      icon: <Villages className="w-5 h-5" />,
      link: "/population",
      text: "Villages",
    },
    {
      id: uuidv4(),
      icon: <Clan className="w-5 h-5" />,
      link: "/population",
      text: "Clans",
    },
  ];

  // Determine active sidebar item based on current pathname
  const getActiveItem = () => {
    for (const sidebar of sidebarData) {
      if (location.pathname.startsWith(sidebar.link)) {
        return sidebar;
      }
    }
    // Return default if no match found (though this scenario shouldn't occur based on provided data)
    return sidebarData[0];
  };

  // Get active sidebar item
  const activeItem = getActiveItem();

  return (
    <div className="flex flex-col md:flex-row ">
      <aside
        className={`fixed  md:static z-40 md:z-0 w-full h-full max-w-72 md:max-w-[16rem] lg:max-w-xs bg-white border-r border-gray-200 px-2 sm:px-6 lg:px-8 py-4 transition-transform transform ${
          isSidebarVisible
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-center gap-2 font-vietnam mb-4">
          <button
            onClick={() => setActiveButton("data")}
            className={`rounded-lg px-3 py-2 text-base flex items-center ${
              activeButton === "data"
                ? "text-brownish bg-lightOrange border-brownish"
                : "text-grayish hover:text-brownish hover:bg-lightOrange hover:border hover:border-brownish"
            }`}
          >
            <PiChartBarHorizontal className="mr-2 w-6 h-6" />
            <span className="font-vietnam">Data</span>
          </button>
          <button
            onClick={() => setActiveButton("forms")}
            className={`rounded-lg px-3 py-2 text-base flex items-center ${
              activeButton === "forms"
                ? "text-brownish bg-lightOrange border-brownish"
                : "hover:text-brownish hover:bg-lightOrange hover:border hover:border-brownish"
            }`}
          >
            <FaRegFileAlt className="mr-2 w-5 h-5" />
            <span className="font-vietnam">Forms</span>
          </button>
        </div>
        <form className="flex items-center mb-4">
          <div className="relative w-full text-grayish hover:text-brownish">
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
              <BiSearchAlt className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="text-sm rounded-lg w-full ps-8 p-2.5 focus:outline-none placeholder:text-grayish hover:placeholder:text-brownish border border-lightgray hover:border-brownish"
              placeholder="Search here"
              required=""
            />
          </div>
        </form>
        <ul className="overflow-y-auto h-full">
          {sidebarData?.map((sidebar) => (
            <li
              key={sidebar.id}
              className={` px-3 py-2 mb-2 font-vietnam rounded-md cursor-pointer ${
                sidebar === activeItem
                  ? "bg-lightOrange text-brownish"
                  : "text-grayish hover:text-brownish hover:bg-lightOrange"
              }`}
            >
              <Link
                to={sidebar.link || "population"}
                className="flex items-center"
              >
                <span className="mr-2">{sidebar?.icon}</span>
                <span className="text-sm">{sidebar?.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <section className="w-full  px-2 sm:px-6 lg:px-8 py-4 overflow-x-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
