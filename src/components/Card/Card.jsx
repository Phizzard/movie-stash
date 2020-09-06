import React from "react";

function Card({ children, ...props }) {
  return (
    <div className="relative shadow rounded-lg" {...props}>
      {children}
    </div>
  );
}

export default Card;
