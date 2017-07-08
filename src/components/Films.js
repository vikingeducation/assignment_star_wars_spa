import React from 'react';

const Films = ({films, isFetching}) => {
  return (
    <div>
      Films
      {JSON.stringify(isFetching)}
      {JSON.stringify(films)}
    </div>
  )
};

export default Films;