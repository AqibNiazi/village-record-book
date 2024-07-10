import React, { useState } from "react";
import { Dropdown, Pagination } from "antd";
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

  const handleDropdownOpenChange = (flag) => {
    setIsOpen(flag);
  };

  const selectedItem = entryOptions.find((item) => item.key === selectedKey);

  const menu = {
    items: entryOptions.map((item) => ({
      key: item.key,
      label: item.label,
    })),
    onClick: handleMenuClick,
  };

  return (
    <Dropdown
      menu={menu}
      placement="bottomRight"
      onOpenChange={handleDropdownOpenChange}
    >
      <button className="flex items-center rounded w-full max-w-max py-1 px-2 text-grayish  bg-lightgray">
        <span className="mr-1 text-sm font-vietnam text-blackish">
          {selectedItem?.label}
        </span>
        {isOpen ? (
          <FaChevronUp className="text-inherit" />
        ) : (
          <FaChevronDown className="text-inherit" />
        )}
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
