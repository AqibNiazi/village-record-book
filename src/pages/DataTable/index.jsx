import React, { useState } from "react";
import { PiChartBarHorizontal } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { TiArrowUnsorted } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Pagination } from "antd";
import { Dropdown, Menu } from "antd";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  Agriculture,
  Sport,
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
} from "@components/icons";
import { useLocation } from "react-router-dom";
import NavigationTab from "@components/DataTable/NavigationTab";

const Dashboard = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(1);
  const [activeButton, setActiveButton] = useState("data");
  const [current, setCurrent] = useState(3);
  const items = [
    {
      key: "1",
      label: <span>A to Z</span>,
    },
    {
      key: "2",
      label: <span>Z to A</span>,
    },
    {
      key: "3",
      label: <span>Last Updated</span>,
    },
  ];
  const [selectedKey, setSelectedKey] = useState("1");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const handleDropdownVisibleChange = (flag) => {
    setIsOpen(flag);
  };

  const selectedItem = items.find((item) => item.key === selectedKey);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const sidebarData = [
    {
      id: uuidv4(),
      icon: <FiUsers className="w-4 h-4" />,
      link: "/",
      text: "Ward Population",
    },
    {
      id: uuidv4(),
      icon: <Agriculture className="w-5 h-5" />,
      link: "/",
      text: "Agriculture",
    },
    {
      id: uuidv4(),
      icon: <Sport className="w-5 h-5" />,
      link: "/",
      text: "Sports",
    },
    {
      id: uuidv4(),
      icon: <Plane className="w-5 h-5" />,
      link: "/",
      text: "Tourism",
    },
    {
      id: uuidv4(),
      icon: <Warning className="w-5 h-5" />,
      link: "/",
      text: "Cross Cutting Issues",
    },
    {
      id: uuidv4(),
      icon: <BusinessLine className="w-5 h-5" />,
      link: "/",
      text: "Business Activity",
    },
    {
      id: uuidv4(),
      icon: <HeartHand className="w-5 h-5" />,
      link: "/",
      text: "Communication Facilities",
    },
    {
      id: uuidv4(),
      icon: <HeartHand className="w-5 h-5" />,
      link: "/",
      text: "Community Projects",
    },
    {
      id: uuidv4(),
      icon: <GraduationHat className="w-5 h-5" />,
      link: "/",
      text: "Education",
    },
    {
      id: uuidv4(),
      icon: <ActivityHeart className="w-5 h-5" />,
      link: "/",
      text: "Health",
    },
    {
      id: uuidv4(),
      icon: <Train className="w-5 h-5" />,
      link: "/",
      text: "Transport",
    },
    {
      id: uuidv4(),
      icon: <GovtService className="w-5 h-5" />,
      link: "/",
      text: "Government Services",
    },
    {
      id: uuidv4(),
      icon: <Location className="w-5 h-5" />,
      link: "/",
      text: "Government Station",
    },
    {
      id: uuidv4(),
      icon: <GovtTownCity className="w-5 h-5" />,
      link: "/",
      text: "Government Town City",
    },
    {
      id: uuidv4(),
      icon: <Coins className="w-5 h-5" />,
      link: "/",
      text: "Ward's Assets",
    },
    {
      id: uuidv4(),
      icon: <WardMarket className="w-5 h-5" />,
      link: "/",
      text: "Ward's Markets",
    },
    {
      id: uuidv4(),
      icon: <WardMarket className="w-5 h-5" />,
      link: "/",
      text: "Ward's Movement",
    },
    {
      id: uuidv4(),
      icon: <CheckList className="w-5 h-5" />,
      link: "/",
      text: "Ward's Visitor Registration",
    },
    {
      id: uuidv4(),
      icon: <Villages className="w-5 h-5" />,
      text: "Villages",
    },
    {
      id: uuidv4(),
      icon: <Clan className="w-5 h-5" />,
      link: "/",
      text: "Clans",
    },
  ];
  console.log("active item", activeItem);
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
  // const activeItem = getActiveItem();

  const buttonsList = [
    {
      id: 1,
      text: "Population",
    },
    {
      id: 2,
      text: "Officials",
    },
    {
      id: 3,
      text: "PLWSN",
    },
    {
      id: 4,
      text: "Resources People",
    },
    {
      id: 5,
      text: "Move in",
    },
    {
      id: 6,
      text: "Births",
    },
    {
      id: 7,
      text: "Deaths",
    },
  ];

  return (
    <div className="flex justify-between">
      <main className="w-full flex justify-between">
        <aside className="w-full h-full max-w-xs border-r border-gray-200 px-2 sm:px-6 lg:px-8 py-4">
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
                  : "text-grayish hover:text-brownish hover:bg-lightOrange hover:border hover:border-brownish"
              }`}
            >
              <FaRegFileAlt className="mr-2 w-5 h-5" />
              <span className="font-vietnam">Forms</span>
            </button>
          </div>
          <form className="flex items-center  mb-4">
            <div className="relative w-full text-grayish hover:text-brownish ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BiSearchAlt className="w-5 h-5 " />
              </div>
              <input
                type="text"
                id="simple-search"
                className="text-sm rounded-lg w-full ps-8 p-2.5 placeholder:text-grayish hover:placeholder:text-brownish border border-lightgray hover:border-brownish"
                placeholder="Search here"
                required=""
              />
            </div>
          </form>
          <ul>
            {sidebarData?.map((item, index) => (
              <li
                key={item.id}
                className={`flex items-center px-3 py-2 mb-2 font-vietnam  rounded-md cursor-pointer ${
                  index === activeItem
                    ? " bg-lightOrange text-brownish"
                    : " text-grayish hover:bg-lightOrange"
                }`}
                onClick={() => setActiveItem(index)}
              >
                <span className="mr-2">{item?.icon}</span>
                <span className="text-sm">{item?.text}</span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="w-full px-8 py-4">
          <div className="w-full mb-4">
            <h1 className="text-3xl font-vietnam font-semibold text-blackish mb-4">
              Ward Population
            </h1>
            {buttonsList?.map((items) => (
              <button
                key={items?.id}
                className="px-3 py-1 rounded-md border hover:bg-lightOrange border-grayish hover:border-brownish font-normal text-base text-grayish  hover:text-blackish mr-2"
              >
                {items?.text}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[1.8rem] font-vietnam font-semibold text-blackish">
              Population List
            </h2>
            <button className="flex items-center bg-[#BA4A21] px-3 py-2 rounded-md text-white">
              <FaPlus className="mr-2" /> Register Population
            </button>
          </div>
          <div>
            <form className="flex items-center mb-4">
              <div className="relative w-full text-grayish hover:text-brownish mr-2">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <BiSearchAlt className="w-5 h-5 " />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="text-sm rounded-lg w-full ps-8 p-2 focus:outline-none placeholder:text-grayish hover:placeholder:text-brownish border border-lightgray hover:border-brownish"
                  placeholder="Search here"
                  required=""
                />
              </div>
              <Dropdown
                overlay={
                  <Menu onClick={handleMenuClick}>
                    {items.map((item) => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomRight"
                onVisibleChange={handleDropdownVisibleChange}
              >
                <button className="flex items-center rounded-lg w-full max-w-max py-2 px-3 text-brownish border border-brownish bg-lightOrange">
                  <span className="mr-1 text-sm font-vietnam">
                    {selectedItem?.label}
                  </span>
                  {isOpen ? (
                    <FaChevronUp className="text-inherit" />
                  ) : (
                    <FaChevronDown className="text-inherit" />
                  )}
                </button>
              </Dropdown>
            </form>
          </div>

          {/*Tables */}
          <div className="relative overflow-x-auto shadow-md ">
            <table className="w-full text-sm  rtl:text-right text-gray-500">
              <thead className="text-xs uppercase text-grayish bg-gray-50">
                <tr className="">
                  <th className="px-6 py-3">
                    <div className="w-full flex items-center justify-center">
                      <span>First Name</span>
                      <TiArrowUnsorted className="ml-2" />
                    </div>
                  </th>
                  <th className="px-6 py-3">
                    <div className="w-full flex items-center justify-center">
                      <span>Last Name</span>
                      <TiArrowUnsorted className="ml-2" />
                    </div>
                  </th>
                  <th className="px-6 py-3">Gender</th>
                  <th className="px-6 py-3">Date of Birth</th>
                  <th className="px-6 py-3">
                    <div className="flex items-center">
                      <span>Last Edited</span>
                      <TiArrowUnsorted className="ml-2" />
                    </div>
                  </th>
                  <th className="px-6 py-3">ID Number</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white border-b text-blackish font-vietnam text-base">
                  <td className="px-6 py-4 text-center">John</td>
                  <td className="px-6 py-4 text-center">Doe</td>
                  <td className="px-6 py-4 text-center">Male</td>
                  <td className="px-6 py-4 text-center">21 Jun 2022</td>
                  <td className="px-6 py-4 text-center">Yesterday</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center">
                      <span className="mr-1">101111111</span>
                      <FaRegCopy />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <FiEdit3 />
                      <RiDeleteBin6Line />
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <NavigationTab />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
