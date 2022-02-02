import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Container } from "./layoutComponents";

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <StyledNav>
        <SiteTitle>
          <Link to="/">Carter</Link>
        </SiteTitle>
        <HeaderLinks>
          <NavItem>
            <Link to="/about" activeClassName="selected-link">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/projects" activeClassName="selected-link">
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/uses" activeClassName="selected-link">
              Uses
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" activeClassName="selected-link">
              Contact
            </Link>
          </NavItem>
        </HeaderLinks>
      </StyledNav>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const mobileBreakpoint = "720px";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled.li`
  padding-left: 1.5rem;
  margin: 0;
  .selected-link {
    color: var(--primary-color);
  }
`;

const HeaderLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: ${mobileBreakpoint}) {
    ${NavItem}:first-of-type {
      padding-left: 0;
    }
  }
`;

const SiteTitle = styled.div`
  color: var(--primary-color);
  font-size: 2.25rem;

  ::before,
  ::after {
    content: "/";
    color: var(--secondary-color);
  }
`;

const StyledHeader = styled(Header)`
  color: var(--secondary-color);
  margin-top: 4rem;
  margin-bottom: 5rem;
  font-family: "Rubik", sans-serif;

  h1 {
    margin: 0;
  }

  @media (max-width: ${mobileBreakpoint}) {
    margin-top: 3rem;
    margin-bottom: 4rem;

    ${SiteTitle} {
      padding-bottom: 1rem;
    }
  }
`;

export default StyledHeader;
