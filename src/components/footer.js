import React from "react";
import styled from "styled-components";
import { Container } from "./layoutComponents";
import { Text } from "./text";

const Footer = () => (
  <StyledFooter>
    <Container>
      <Text>© {new Date().getFullYear()} - Carter McAlister</Text>
    </Container>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export default Footer;
