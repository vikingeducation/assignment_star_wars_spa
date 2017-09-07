import React from "react";

const Loading = ({ resource }) => {
  return resource.length ? null : (
    <img
      className="loading"
      src="https://coledavis23456789.files.wordpress.com/2013/04/lightsaber-battle2.gif"
    />
  );
};

export default Loading;
