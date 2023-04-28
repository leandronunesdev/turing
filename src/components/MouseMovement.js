import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';

const MouseMovement = () => {
  const [position, setPosition] = useState();

  // useEffect(() => {
  //   const setFromEvent = (e) =>
  //     setPosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });

  //   window.addEventListener('mousemove', setFromEvent);

  //   return () => {
  //     window.removeEventListener('mousemove', setFromEvent);
  //   };
  // }, []);

  // useEffect(() => {
  //   const setFromEvent = (e) =>
  //     setPosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });

  //   window.addEventListener('mousemove', setFromEvent);
  // }, []);

  useCallback(() => {
    const setFromEvent = (e) =>
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  console.log(position);

  return <div>MouseMovement</div>;
};

export default MouseMovement;
