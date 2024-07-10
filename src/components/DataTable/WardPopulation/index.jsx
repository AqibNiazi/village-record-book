import React, { Fragment, useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Dropdown, Menu } from "antd";
import { BiSearchAlt } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import NavigationTab from "@components/DataTable/NavigationTab";
import { useLocation } from "react-router-dom";
const WardPopulation = () => {
    const [selectedKey, setSelectedKey] = useState("1");
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
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
    const onChange = (page) => {
      console.log(page);
      setCurrent(page);
    };
    const handleMenuClick = (e) => {
      setSelectedKey(e.key);
    };



  const handleDropdownVisibleChange = (flag) => {
    setIsOpen(flag);
  };

  const selectedItem = items.find((item) => item.key === selectedKey);
  const buttonsList = [
    {
      id: 1,
      text: "Population",
      link: "/population",
    },
    {
      id: 2,
      text: "Officials",
      link: "/officials",
    },
    {
      id: 3,
      text: "PLWSN",
      link: "/PLWSN",
    },
    {
      id: 4,
      text: "Resources People",
      link: "/resources-people",
    },
    {
      id: 5,
      text: "Move in",
      link: "/move-in",
    },
    {
      id: 6,
      text: "Births",
      link: "/births",
    },
    {
      id: 7,
      text: "Deaths",
      link: "/deaths",
    },
  ];
  return (
    <Fragment>
      <div className="w-full mb-4">
        <h1 className="text-[2rem] leading-10 font-vietnam font-semibold text-blackish mb-4">
          Ward Population
        </h1>
        {buttonsList?.map((items) => (
          <button
            key={items?.id}
            className={`px-3 py-1 rounded-md  hover:bg-lightOrange mb-4 lg:mb-0  ${
              location?.pathname === items?.link
                ? "border border-brownish bg-lightOrange text-blackish"
                : "border border-grayish hover:border-brownish text-grayish hover:text-blackish"
            }  font-normal text-base mr-2`}
          >
            {items?.text}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-[1.75rem] leading-9 font-vietnam font-semibold text-blackish mb-4 sm:mb-0">
          Population List
        </h2>
        <button className="flex items-center justify-center sm:justify-start font-semibold w-full sm:w-max bg-[#BA4A21] px-3 py-2 rounded-md text-white">
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
        <table className="overflow-x-auto lg:w-full  text-sm  rtl:text-right text-gray-500">
          <thead className="text-xs uppercase text-grayish bg-gray-50">
            <tr className="w-full">
              <th className="px-6 py-3min-w-36 lg:min-w-full">
                <div className="w-full flex items-center justify-center">
                  <span>First Name</span>
                  <TiArrowUnsorted className="ml-2" />
                </div>
              </th>
              <th className="px-6 py-3 min-w-36 lg:min-w-full">
                <div className="w-full flex items-center justify-center">
                  <span>Last Name</span>
                  <TiArrowUnsorted className="ml-2" />
                </div>
              </th>
              <th className="px-6 py-3 min-w-36 lg:min-w-full">Gender</th>
              <th className="px-6 py-3 min-w-36 lg:min-w-full">
                Date of Birth
              </th>
              <th className="px-6 py-3 min-w-36 lg:min-w-full">
                <div className="flex items-center">
                  <span>Last Edited</span>
                  <TiArrowUnsorted className="ml-2" />
                </div>
              </th>
              <th className="px-6 py-3 min-w-36 lg:min-w-full">ID Number</th>
              <th className="px-6 py-3 min-w-36 lg:min-w-full">Action</th>
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
                <div className="flex items-center justify-center gap-8">
                  <FiEdit3 />
                  <RiDeleteBin6Line />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <NavigationTab current={current} onChange={onChange} />
      </div>
    </Fragment>
  );
};

export default WardPopulation;
