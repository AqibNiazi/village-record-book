import React from "react";

const WardMarket = ({ className, color = "currentColor" }) => {
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
        d="M12.5 17.5V13C12.5 12.5333 12.5 12.2999 12.4092 12.1217C12.3293 11.9649 12.2018 11.8374 12.045 11.7575C11.8667 11.6667 11.6334 11.6667 11.1667 11.6667H8.83333C8.36662 11.6667 8.13327 11.6667 7.95501 11.7575C7.79821 11.8374 7.67072 11.9649 7.59083 12.1217C7.5 12.2999 7.5 12.5333 7.5 13V17.5M2.5 5.83333C2.5 7.21405 3.61929 8.33333 5 8.33333C6.38071 8.33333 7.5 7.21405 7.5 5.83333C7.5 7.21405 8.61929 8.33333 10 8.33333C11.3807 8.33333 12.5 7.21405 12.5 5.83333C12.5 7.21405 13.6193 8.33333 15 8.33333C16.3807 8.33333 17.5 7.21405 17.5 5.83333M5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V5.16667C17.5 4.23325 17.5 3.76654 17.3183 3.41002C17.1586 3.09641 16.9036 2.84144 16.59 2.68166C16.2335 2.5 15.7668 2.5 14.8333 2.5H5.16667C4.23325 2.5 3.76654 2.5 3.41002 2.68166C3.09641 2.84144 2.84144 3.09641 2.68166 3.41002C2.5 3.76654 2.5 4.23325 2.5 5.16667V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WardMarket;
