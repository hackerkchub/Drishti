import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #0a2540, #126782);
  font-family: "Poppins", sans-serif;
`;

export const AuthLogo = styled.div`
  img {
    width: 150px;
    margin-bottom: 30px;
  }
`;

export const AuthCard = styled.div`
  background: #fff;
  width: 400px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  padding: 40px 30px;
`;

export const AuthTabs = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #eaeaea;
  margin-bottom: 25px;

  button {
    background: none;
    border: none;
    outline: none;
    font-weight: 600;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    color: #777;

    &.active {
      color: #007bff;
      border-bottom: 2px solid #007bff;
    }
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 10px 15px;

  .icon {
    color: #007bff;
    margin-right: 10px;
    font-size: 18px;
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-size: 15px;
  }
`;

export const ExtraOptions = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

export const LoginButton = styled.button`
  background: linear-gradient(90deg, #007bff, #00bcd4);
  border: none;
  padding: 12px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 20px;
  margin-top: 10px;

  .google {
    color: #db4437;
    cursor: pointer;
  }

  .linkedin {
    color: #0077b5;
    cursor: pointer;
  }
`;

export const SwitchText = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 15px;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;
