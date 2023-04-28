import React from 'react';
import { useState } from 'react';

const Message = () => {
  const [messageObj, setMessage] = useState({ message: '' });

  return (
    <div>
      <input
        type='text'
        value={messageObj.message}
        placeholder='Enter a message'
        // onChange={(e) => {
        //   setMessage({ message: e.target.value });
        // }}
        onChange={(e) => {
          const newMessageObj = { message: e.target.value };
          setMessage(newMessageObj);
        }}
      />
      <p>
        <strong>{messageObj.message}</strong>
      </p>
    </div>
  );
};

export default Message;
