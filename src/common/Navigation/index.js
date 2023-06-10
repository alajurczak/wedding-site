import { useEffect, useState } from "react";
import {
  Container,
  Logo,
  NavContainer,
  NavigationList,
  StyledNavLink,
} from "./styled";

export const Navigation = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLogoHover = () => {
    setIsLogoHovered(true);
    setIsNavVisible(true);
  };

  const handleLinkHover = (index) => {
    setActiveLink(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoHovered(false);
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
                style={{ animationDelay: "0s" }}
                onMouseEnter={() => handleLinkHover(0)}
                isActive={activeLink === 0}
              >
                STRONA GŁÓWNA
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                style={{ animationDelay: "0.2s" }}
                onMouseEnter={() => handleLinkHover(1)}
                isActive={activeLink === 1}
              >
                O ŚLUBIE
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                style={{ animationDelay: "0.3s" }}
                onMouseEnter={() => handleLinkHover(2)}
                isActive={activeLink === 2}
              >
                ZAPROSZENIA
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                style={{ animationDelay: "0.4s" }}
                onMouseEnter={() => handleLinkHover(3)}
                isActive={activeLink === 3}
              >
                HARMONOGRAM
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                style={{ animationDelay: "0.5s" }}
                onMouseEnter={() => handleLinkHover(4)}
                isActive={activeLink === 4}
              >
                KSIĘGA GOŚCI
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                style={{ animationDelay: "0.6s" }}
                onMouseEnter={() => handleLinkHover(5)}
                isActive={activeLink === 5}
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