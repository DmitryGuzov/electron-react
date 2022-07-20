import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInRoute } from '../config/routes';

const ForgotPasswordPage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ForgotPasswordPage</h1>

      <ul>
        <button
          onClick={() => {
            navigate(SignInRoute);
          }}
        >
          send email
        </button>
      </ul>
    </div>
  );
};

export default ForgotPasswordPage;
