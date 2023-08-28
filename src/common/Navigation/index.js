import { useEffect, useRef, useState } from "react";
import {
  NavContainer,
  NavigationLogo,
  NavigationList,
  StyledNavLink,
  LogoLink,
  MenuButton,
} from "./styled";
import { LogoutButton } from "../LogoutButton";
import { useContext } from "react";
import { AuthContext } from "../../App";

export const Navigation = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    setLoggedIn(false);
  };

  return (
    <NavContainer ref={navRef}>
      <NavigationLogo>
        <li>
          <LogoLink to="/initialSite"></LogoLink>
        </li>
      </NavigationLogo>
      <MenuButton onClick={handleMenuToggle}>☰</MenuButton>
      <NavigationList isOpen={isMenuOpen}>
        <li>
          <StyledNavLink to="/aboutWedding">STRONA GŁÓWNA</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/invitations">RSVP</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/qa">FAQ</StyledNavLink>
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
        <LogoutButton handleLogout={handleLogout} />
      </NavigationList>
    </NavContainer>
  );
};
