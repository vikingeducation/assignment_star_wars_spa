import React from "react";

const Showable = ({ isFetching, children }) => {
  if (!isFetching) {
    return null;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default Showable;
