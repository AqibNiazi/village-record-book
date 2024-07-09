import React from "react";

const Location = ({ className, color = "currentColor" }) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_539_63079)">
        <path
          d="M4.16669 11.9053C2.62389 12.5859 1.66669 13.5343 1.66669 14.5834C1.66669 16.6544 5.39765 18.3334 10 18.3334C14.6024 18.3334 18.3334 16.6544 18.3334 14.5834C18.3334 13.5343 17.3762 12.5859 15.8334 11.9053M15 6.66669C15 10.0531 11.25 11.6667 10 14.1667C8.75002 11.6667 5.00002 10.0531 5.00002 6.66669C5.00002 3.90526 7.2386 1.66669 10 1.66669C12.7614 1.66669 15 3.90526 15 6.66669ZM10.8334 6.66669C10.8334 7.12692 10.4603 7.50002 10 7.50002C9.53978 7.50002 9.16669 7.12692 9.16669 6.66669C9.16669 6.20645 9.53978 5.83335 10 5.83335C10.4603 5.83335 10.8334 6.20645 10.8334 6.66669Z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_539_63079">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Location;
