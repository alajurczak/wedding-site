import { useEffect, useState } from "react";
import {
  Container,
  Logo,
  NavContainer,
  NavigationList,
  StyledNavLink,
} from "./styled";

export const InitialSite = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLogoHover = () => {
    setIsNavVisible(true);
  };

  const handleLinkHover = (index) => {
    setActiveLink(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavVisible(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <Logo onMouseEnter={handleLogoHover} />
      {isNavVisible && (
        <NavContainer onMouseLeave={() => setIsNavVisible(false)}>
          <NavigationList>
            <li>
              <StyledNavLink
                to="/home"
                style={{ animationDelay: "0s" }}
                onMouseEnter={() => handleLinkHover(0)}
              >
                STRONA GŁÓWNA
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/aboutWedding"
                style={{ animationDelay: "0.2s" }}
                onMouseEnter={() => handleLinkHover(1)}
              >
                O ŚLUBIE
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/invitations"
                style={{ animationDelay: "0.3s" }}
                onMouseEnter={() => handleLinkHover(2)}
              >
                RSVP
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/qa"
                style={{ animationDelay: "0.4s" }}
                onMouseEnter={() => handleLinkHover(3)}
              >
                Q&A
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/schedule"
                style={{ animationDelay: "0.5s" }}
                onMouseEnter={() => handleLinkHover(4)}
              >
                HARMONOGRAM
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/guestbook"
                style={{ animationDelay: "0.6s" }}
                onMouseEnter={() => handleLinkHover(5)}
              >
                KSIĘGA GOŚCI
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="/photos"
                style={{ animationDelay: "0.6s" }}
                onMouseEnter={() => handleLinkHover(6)}
              >
                ZDJĘCIA ŚLUBNE
              </StyledNavLink>
            </li>
          </NavigationList>
        </NavContainer>
      )}
    </Container>
  );
};
