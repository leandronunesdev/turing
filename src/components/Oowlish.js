import React from 'react';

function Oowlish() {
  function foo(x, y) {
    const sum = x + y;
    console.log(sum);
    return sum;
  }

  // foo(7);

  async function process(item) {
    return item * 2;
  }

  const a = [1, 2, 3, 4, 5];

  const result = a.map(process);

  return (
    <div>
      <span>Foo</span>
      <span>hello</span>
    </div>
  );
}

export default Oowlish;
