import { useEffect, useState } from "react";
import {
  Container,
  Logo,
  NavContainer,
  NavigationList,
  StyledNavLink,
} from "./styled";

export const Navigation = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showLinks, setShowLinks] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
      setShowLinks(true);
    }, 1000);
  }, []);

  const handleLinkHover = (index) => {
    setActiveLink(index);
  };

  return (
    <Container>
      {showLogo && <Logo />}
      {showLinks && (
        <>
          <Logo />
          <NavContainer>
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
                  style={{ animationDelay: "0.4s" }}
                  onMouseEnter={() => handleLinkHover(2)}
                  isActive={activeLink === 2}
                >
                  ZAPROSZENIA
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  style={{ animationDelay: "0.6s" }}
                  onMouseEnter={() => handleLinkHover(3)}
                  isActive={activeLink === 3}
                >
                  HARMONOGRAM
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  style={{ animationDelay: "0.8s" }}
                  onMouseEnter={() => handleLinkHover(4)}
                  isActive={activeLink === 4}
                >
                  KSIĘGA GOŚCI
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  style={{ animationDelay: "1s" }}
                  onMouseEnter={() => handleLinkHover(5)}
                  isActive={activeLink === 5}
                >
                  ZDJĘCIA ŚLUBNE
                </StyledNavLink>
              </li>
            </NavigationList>
          </NavContainer>
        </>
      )}
    </Container>
  );
};
