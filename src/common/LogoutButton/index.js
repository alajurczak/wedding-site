import { ButtonContainer, Switcher, Text } from "./styled";

export const LogoutButton = ({ handleLogout }) => {
  return (
    <ButtonContainer onClick={handleLogout}>
      <Switcher>
        <Text>→</Text>
      </Switcher>
    </ButtonContainer>
  );
};
