import React from 'react';

const UserCard = ({ name }) => {
  const updateCount = React.useRef(0);
  const [enabled, setEnabled] = React.useState(true);

  React.useEffect(() => {
    updateCount.current += 1;
  }, [enabled]);

  React.useEffect(() => {
    updateCount.current += 1;
  }, [updateCount.current]);

  console.log(updateCount.current);

  return (
    <div>
      <h2>{name}</h2>
      <button
        className={enabled ? 'enabled' : 'disabled'}
        onClick={() => setEnabled((current) => !current)}
      >
        {enabled ? 'Disable' : 'Enable'}
      </button>
    </div>
  );
};

export default UserCard;
