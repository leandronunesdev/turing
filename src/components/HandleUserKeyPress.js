import React, { useEffect, useState } from 'react';

const HandleUserKeyPress = () => {
  const [userText, setUserText] = useState('');

  const handleUserKeyPress = (event) => {
    const { key, keyCode } = event;

    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
  }, []);

  return (
    <div>
      <h1>Typing here:</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
};

export default HandleUserKeyPress;
