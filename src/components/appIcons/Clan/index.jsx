import React from "react";

const Clan = ({ className, color = "currentColor" }) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 17.5H17.5M5.83333 14.9998V8.33313M14.5833 14.9998V8.33313M16.6667 5.83331L10.3533 1.88748C10.2252 1.80737 10.1611 1.76731 10.0923 1.75169C10.0315 1.73788 9.96845 1.73788 9.90767 1.75169C9.83894 1.76731 9.77485 1.80737 9.64667 1.88748L3.33333 5.83331H16.6667Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Clan;
