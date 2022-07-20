import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInRoute } from '../config/routes';
import { Button } from '@chakra-ui/react';

const SignUpPage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Sign up page</h1>
      <Button
        onClick={() => {
          navigate(SignInRoute);
        }}
      >
        Sign up
      </Button>
    </div>
  );
};

export default SignUpPage;
