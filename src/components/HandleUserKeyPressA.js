import React, { useEffect, useState } from 'react';

const HandleUserKeyPressA = () => {
  const [userText, setUserText] = useState('');

  const handleEvents = (event) => {
    const { key, keyCode } = event;

    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEvents);

    return () => {
      window.removeEventListener('keydown', handleEvents);
    };
  }, [handleEvents]);

  return (
    <div>
      <h1>Typing here:</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
};

export default HandleUserKeyPressA;
