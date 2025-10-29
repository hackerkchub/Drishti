import React, { useState } from "react";
import styled from "styled-components";

const AuthContainer = styled.div`
  padding: 120px 20px;
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #4b6cff;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

const Toggle = styled.p`
  text-align: center;
  margin-top: 15px;
  color: #4b6cff;
  cursor: pointer;
`;

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <AuthContainer>
      <FormWrapper>
        <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
        {isSignup && <Input placeholder="Full Name" />}
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>{isSignup ? "Create Account" : "Login"}</Button>
        <Toggle onClick={() => setIsSignup(!isSignup)}>
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Toggle>
      </FormWrapper>
    </AuthContainer>
  );
};

export default AuthPage;
