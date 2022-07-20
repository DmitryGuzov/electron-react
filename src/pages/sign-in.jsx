import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeRoute } from '../config/routes';
import { Button } from '@chakra-ui/react';
import SignInForm from '../components/sign-in-form';

const SignInPage = (props) => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
