import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavigationList = styled.div`
  font-size: 20px;
  list-style-type: none;
  display: flex;
  margin: 10px auto;
`;

export const StyledNavLink = styled.a`
  line-height: 2;
  padding: 5px 25px;

  &:hover {
    cursor: pointer;
    border-bottom: solid 2px ${({ theme }) => theme.colors.pink};
  }
`;
