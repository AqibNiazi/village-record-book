import React from "react";

const Warning = ({ className, color = "currentColor" }) => {
  return (
    <svg
      width={20}
      height={20}
      className={className}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99982 6.49999V9.83333M9.99982 13.1667H10.0081M8.84591 2.2431L1.99184 14.0819C1.61167 14.7386 1.42159 15.0669 1.44968 15.3364C1.47419 15.5714 1.59733 15.785 1.78846 15.924C2.00759 16.0833 2.38698 16.0833 3.14575 16.0833H16.8539C17.6127 16.0833 17.992 16.0833 18.2112 15.924C18.4023 15.785 18.5254 15.5714 18.55 15.3364C18.578 15.0669 18.388 14.7386 18.0078 14.0819L11.1537 2.24309C10.7749 1.58879 10.5855 1.26164 10.3384 1.15176C10.1229 1.05592 9.87678 1.05592 9.66123 1.15176C9.41413 1.26164 9.22472 1.58879 8.84591 2.2431Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Warning;
