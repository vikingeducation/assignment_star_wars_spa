import React from "react";

const Loading = ({ resource }) => {
  return resource.length ? null : (
    <img src="https://vignette2.wikia.nocookie.net/darth/images/2/29/Extend.gif/revision/latest?cb=20070905213317" />
  );
};

export default Loading;
