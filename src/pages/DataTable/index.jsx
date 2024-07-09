import React from "react";
import { PiChartBarHorizontal } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { TiArrowUnsorted } from "react-icons/ti";
import { FaRegCopy } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Agriculture } from "@components/icons";
const Dashboard = () => {
  const sidebar = [
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Ward Population",
    },
    {
      icon: <Agriculture className="w-4 h-4" />,
      text: "Agriculture",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Sports",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Tourism",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Cross Cutting Issues",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Business Activity",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Communication Facilities",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Community Projects",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Education",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Health",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Transport",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Government Services",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Government Station",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Government Town City",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Ward's Assets",
    },
    {
      icon: <FiUsers className="w-4 h-4" />,
      text: "Ward's Markets",
    },
  ];

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
        <aside className="w-full h-full max-w-[16rem] border-r border-gray-200 px-2 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center gap-2 font-vietnam mb-4">
            <button className="rounded-lg px-3 py-2 hover:border text-base hover:bg-lightOrange  hover:border-brownish flex items-center text-grayish hover:text-brownish">
              <PiChartBarHorizontal className="mr-2 w-6 h-6" />
              <span className="font-vietnam">Data</span>
            </button>
            <button className="rounded-lg px-3 py-2 hover:border text-base hover:bg-lightOrange hover:border-brownish flex items-center text-grayish hover:text-brownish">
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
            {sidebar?.map((item) => (
              <li className="flex items-center px-3 py-2 mb-2 font-vietnam text-grayish hover:text-brownish hover:bg-lightOrange rounded-md">
                <span className="mr-2">{item?.icon}</span>
                <span className="text-sm">{item?.text}</span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="w-full px-6 py-4">
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
              <div className="relative w-full text-lightgray hover:text-brownish mr-2">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                  <BiSearchAlt className="w-5 h-5 " />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="text-sm rounded-lg w-full ps-8 p-2.5 placeholder:text-lightgray hover:placeholder:text-brownish border border-lightgray hover:border-brownish"
                  placeholder="Search here"
                  required=""
                />
              </div>
              <select
                id="countries"
                className="text-brownish bg-lightOrange text-sm rounded-lg w-full max-w-20  p-2.5"
              >
                <option selected="">A-Z</option>
                <option value="">Z-A</option>
              </select>
            </form>
          </div>

          {/*Tables */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">John</td>
                  <td className="px-6 py-4">Doe</td>
                  <td className="px-6 py-4">Male</td>
                  <td className="px-6 py-4">21 Jun 2022</td>
                  <td className="px-6 py-4">Yesterday</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
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
            </table>
            <nav
              className="flex items-center flex-column flex-wrap md:flex-row justify-between px-6 py-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
