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

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const HeaderLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding-left: 1.5rem;
  margin: 0;
  .selected-link {
    color: var(--primary-color);
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
  padding: 2rem 0;
  margin-bottom: 4rem;
  font-family: "Rubik", sans-serif;

  h1 {
    margin: 0;
  }
`;

export default StyledHeader;
