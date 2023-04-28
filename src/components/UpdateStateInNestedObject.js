import React, { useEffect, useState } from 'react';

const UpdateStateInNestedObject = () => {
  const [profile, setProfile] = useState({
    developer: '',
    skills: {
      id: 1,
      name: '',
    },
  });

  const handleProfileUpdate = () => {
    setProfile((prevState) => ({
      ...prevState,
      skills: {
        ...prevState.skills,
        name: 'NodeJS',
      },
    }));
  };

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  return <button onClick={() => handleProfileUpdate()}>Update state</button>;
};

export default UpdateStateInNestedObject;
