import React from "react";
import ReactLoading from "react-loading";

const Loadable = ({ condition, children }) => {
  if (!condition) {
    return <ReactLoading type="cylon" color="#ccc" delay={0} />;
  }
  return <div>{children}</div>;
};

export default Loadable;
