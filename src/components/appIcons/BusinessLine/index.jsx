import React from "react";

const BusinessLine = ({ className, color = "currentColor" }) => {
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
        d="M14.1667 7.5L9.63807 12.0286C9.47306 12.1936 9.39056 12.2761 9.29542 12.307C9.21174 12.3342 9.12159 12.3342 9.03791 12.307C8.94277 12.2761 8.86027 12.1936 8.69526 12.0286L7.13807 10.4714C6.97306 10.3064 6.89056 10.2239 6.79542 10.193C6.71174 10.1658 6.62159 10.1658 6.53791 10.193C6.44277 10.2239 6.36027 10.3064 6.19526 10.4714L2.5 14.1667M14.1667 7.5H10.8333M14.1667 7.5V10.8333M6.5 17.5H13.5C14.9001 17.5 15.6002 17.5 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.5 15.6002 17.5 14.9001 17.5 13.5V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BusinessLine;