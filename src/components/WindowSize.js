import React from 'react';
import { useState, useEffect } from 'react';

const WindowSize = () => {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });

    const handleResize = () => {
      setWindowSize({
        window: window.innerWidth,
        height: window.innerHeight,
      });
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);
    }, [windowSize]);

    return windowSize;
  }

  // function useWindowSize() {
  //   const [windowSize, setWindowSize] = useState({
  //     width: 0,
  //     height: 0,
  //   });

  //   const handleResize = () => {
  //     setWindowSize({
  //       window: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   useEffect(() => {
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, [windowSize]);

  //   return windowSize;
  // }

  // function useWindowSize() {
  //   const [windowSize, setWindowSize] = useState({
  //     width: 0,
  //     height: 0,
  //   });

  //   const handleResize = () => {
  //     setWindowSize({
  //       window: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   useEffect(() => {
  //     window.addEventListener('resize', handleResize);
  //     handleResize();
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

  //   return windowSize;
  // }

  console.log(useWindowSize());

  return <div>WindowSize</div>;
};

export default WindowSize;
