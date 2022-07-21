import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInRoute } from '../config/routes';
import { Button } from '@chakra-ui/react';
import SignUpForm from '../components/sign-up-form';

const SignUpPage = (props) => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
