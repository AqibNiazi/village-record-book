import React from "react";

const GovtService = ({ className, color = "currentColor" }) => {
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
        d="M10.8334 9.16667H14.8334C15.7668 9.16667 16.2335 9.16667 16.59 9.34832C16.9036 9.50811 17.1586 9.76308 17.3184 10.0767C17.5 10.4332 17.5 10.8999 17.5 11.8333V17.5M10.8334 17.5V5.16667C10.8334 4.23325 10.8334 3.76654 10.6517 3.41002C10.4919 3.09641 10.2369 2.84144 9.92334 2.68166C9.56682 2.5 9.10011 2.5 8.16669 2.5H5.16669C4.23327 2.5 3.76656 2.5 3.41004 2.68166C3.09643 2.84144 2.84147 3.09641 2.68168 3.41002C2.50002 3.76654 2.50002 4.23325 2.50002 5.16667V17.5M18.3334 17.5H1.66669M5.41669 5.83333H7.91669M5.41669 9.16667H7.91669M5.41669 12.5H7.91669"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GovtService;