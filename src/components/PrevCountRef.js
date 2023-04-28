import { useEffect, useRef, useState } from 'react';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export default function PrevCountRef() {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <div className='App'>
      <h1
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}/{previous}
      </h1>

      <small>click on number</small>
    </div>
  );
}
