import React from "react";

const ActivityHeart = ({ className, color = "currentColor" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9167 9.58333H12.0834L10.8334 12.0833L9.16669 7.08333L7.91669 9.58333H7.08335M9.99431 4.27985C8.32819 2.332 5.54981 1.80804 3.46227 3.59168C1.37472 5.37532 1.08083 8.35748 2.72019 10.467C3.95843 12.0604 7.4761 15.2591 9.12336 16.7291C9.42618 16.9993 9.57758 17.1344 9.75488 17.1876C9.90879 17.2338 10.0798 17.2338 10.2337 17.1876C10.411 17.1344 10.5625 16.9993 10.8653 16.7291C12.5125 15.2591 16.0302 12.0604 17.2684 10.467C18.9078 8.35748 18.6498 5.35656 16.5264 3.59168C14.4029 1.8268 11.6604 2.332 9.99431 4.27985Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ActivityHeart;
