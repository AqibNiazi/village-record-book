import React from "react";

const Coins = ({ className, color = "currentColor" }) => {
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
        d="M10.8334 4.16667C10.8334 5.08714 8.78133 5.83333 6.25002 5.83333C3.71872 5.83333 1.66669 5.08714 1.66669 4.16667M10.8334 4.16667C10.8334 3.24619 8.78133 2.5 6.25002 2.5C3.71872 2.5 1.66669 3.24619 1.66669 4.16667M10.8334 4.16667V7.88096C9.81543 8.18665 9.16669 8.64911 9.16669 9.16667M1.66669 4.16667V14.1667C1.66669 15.0871 3.71872 15.8333 6.25002 15.8333C7.35805 15.8333 8.37424 15.6904 9.16669 15.4524V9.16667M1.66669 7.5C1.66669 8.42047 3.71872 9.16667 6.25002 9.16667C7.35804 9.16667 8.37424 9.02369 9.16669 8.78571M1.66669 10.8333C1.66669 11.7538 3.71872 12.5 6.25002 12.5C7.35804 12.5 8.37424 12.357 9.16669 12.119M18.3334 9.16667C18.3334 10.0871 16.2813 10.8333 13.75 10.8333C11.2187 10.8333 9.16669 10.0871 9.16669 9.16667M18.3334 9.16667C18.3334 8.24619 16.2813 7.5 13.75 7.5C11.2187 7.5 9.16669 8.24619 9.16669 9.16667M18.3334 9.16667V15.8333C18.3334 16.7538 16.2813 17.5 13.75 17.5C11.2187 17.5 9.16669 16.7538 9.16669 15.8333V9.16667M18.3334 12.5C18.3334 13.4205 16.2813 14.1667 13.75 14.1667C11.2187 14.1667 9.16669 13.4205 9.16669 12.5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Coins;
