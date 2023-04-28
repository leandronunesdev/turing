import React, { useState } from 'react';

const LoadingMCQ = () => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem('persist:root');
    return token || 'default#-token';
  });

  return <div>Token is {token}</div>;
};

export default LoadingMCQ;
