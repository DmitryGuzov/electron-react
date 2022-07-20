import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const UserPage = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='user-page'>
      <Button onClick={handleBack}>Go back</Button>
      User Page
    </div>
  );
};

export default UserPage;
