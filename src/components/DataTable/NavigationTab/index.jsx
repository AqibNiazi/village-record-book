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
      <button className="flex items-center rounded-lg w-full max-w-max py-1 px-2 bg-lightgray">
        <span className="mr-1 text-blackish"> {selectedItem?.label}</span>{" "}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </Dropdown>
  );
};

const NavigationTab = ({ current, onChange }) => {
  return (
    <div className="w-full flex text-sm items-center flex-col md:flex-row justify-between font-vietnam font-normal text-grayish px-6 py-4">
      <div className="flex items-center mb-4 md:mb-0">
        <span className="mr-2">Show</span>
        <EntriesDropdown />
        <span className="ml-2">entries</span>
      </div>
      <Pagination current={current} onChange={onChange} total={50} />
    </div>
  );
};

export default NavigationTab;
