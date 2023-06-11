import {
  NavContainer,
  NavigationLogo,
  NavigationList,
  StyledNavLink,
  LogoLink,
} from "./styled";

export const Navigation = () => {
  return (
    <NavContainer>
      <NavigationLogo>
        <li>
          <LogoLink to="/initialSite"></LogoLink>
        </li>
      </NavigationLogo>
      <NavigationList>
        <li>
          <StyledNavLink to="/home">STRONA GŁÓWNA</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/aboutWedding">O ŚLUBIE</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/invitations">ZAPROSZENIA</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/qa">Q&A</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/schedule">HARMONOGRAM</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/guestbook">KSIĘGA GOŚCI</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/photos">ZDJĘCIA ŚLUBNE</StyledNavLink>
        </li>
      </NavigationList>
    </NavContainer>
  );
};
