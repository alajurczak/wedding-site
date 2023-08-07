import {
  Container,
  LoginForm,
  Header,
  LoginInput,
  LoginButton,
} from "./styled";
import { useState } from "react";

export const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <>
      <Container>
        <LoginForm onSubmit={handleSubmit}>
          <Header>Logowanie</Header>
          <LoginInput
            type="text"
            placeholder="login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton>Zaloguj</LoginButton>
        </LoginForm>
      </Container>
    </>
  );
};
