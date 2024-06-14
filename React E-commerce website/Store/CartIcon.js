import React from 'react';

const CartIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="20px" // Set the height to 20px
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 12.08a2 2 0 0 0 2 1.67h10.64a2 2 0 0 0 2-1.67L23 5H6" />
      </svg>
    </div>
  );
};

export default CartIcon;
