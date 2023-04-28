import React, { useEffect, useState } from 'react';

function NewApp() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const result = {
      data: {
        hits: [
          {
            objectID: '1',
            url: 'google.com',
            title: 'A',
          },
          {
            objectID: '2',
            url: 'google.com',
            title: 'B',
          },
        ],
      },
    };
    setData(result.data);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default NewApp;
