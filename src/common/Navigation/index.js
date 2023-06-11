import { NavContainer, NavigationList, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <NavContainer>
      <NavigationList>
        <li>
          <StyledNavLink>STRONA GŁÓWNA</StyledNavLink>
        </li>
        <li>
          <StyledNavLink>O ŚLUBIE</StyledNavLink>
        </li>
        <li>
          <StyledNavLink>ZAPROSZENIA</StyledNavLink>
        </li>
        <li>
          <StyledNavLink>Q&A</StyledNavLink>
        </li>
        <li>
          <StyledNavLink>HARMONOGRAM</StyledNavLink>
        </li>
        <li>
          <StyledNavLink>KSIĘGA GOŚCI</StyledNavLink>
        </li>
        <li>
          <StyledNavLink>ZDJĘCIA ŚLUBNE</StyledNavLink>
        </li>
      </NavigationList>
    </NavContainer>
  );
};
