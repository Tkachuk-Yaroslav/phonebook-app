import React from 'react';
import { DivStyled, StyledNavLink } from './AuthNav.styled';
// import { divStyled } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <DivStyled>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </DivStyled>
  );
};

export default AuthNav;
