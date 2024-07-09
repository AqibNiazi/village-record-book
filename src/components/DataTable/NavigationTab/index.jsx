import React, { useState } from "react";
import { Dropdown, Menu, Pagination } from "antd";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const entryOptions = [
  {
    key: "10",
    label: <span>10</span>,
  },
  {
    key: "20",
    label: <span>20</span>,
  },
  {
    key: "50",
    label: <span>50</span>,
  },
];

const EntriesDropdown = () => {
  const [selectedKey, setSelectedKey] = useState("10");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const handleDropdownVisibleChange = (flag) => {
    setIsOpen(flag);
  };

  const selectedItem = entryOptions.find((item) => item.key === selectedKey);

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleMenuClick}>
          {entryOptions.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }
      placement="bottomRight"
      onVisibleChange={handleDropdownVisibleChange}
    >
      <button className="flex items-center rounded-lg w-full max-w-max py-1 px-2   bg-lightgray">
        <span className="mr-1 text-blackish"> {selectedItem?.label}</span>{" "}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </Dropdown>
  );
};

const NavigationTab = ({ current, onChange }) => {
  return (
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between px-6 py-4">
      <div className="flex text-sm items-center font-vietnam font-normal text-grayish  w-full max-w-xs">
        <span className="mr-2">Show</span>

        <EntriesDropdown />
        <span className="ml-2">entries</span>
      </div>
      <div className="flex items-center">
        <Pagination current={current} onChange={onChange} total={50} />
      </div>
    </nav>
  );
};

export default NavigationTab;
