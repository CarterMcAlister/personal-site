import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import Icons from "../components/icons";
import { Text } from "../components/text";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <Container>
      <SEO
        title="Contact"
        keywords={[
          `software engineer`,
          `developer`,
          `react`,
          `front-end`,
          "web",
          `gatsby`
        ]}
      />
      <Text>
        <h1>Contact Me</h1>
        <p>
          Want to hire me for a project, have a question about something, or
          just want to say hello? You can message me on{" "}
          <a
            href="https://www.instagram.com/carter.mcalister/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          , or <a href="mailto:carterm126@gmail.com">email me</a>.
        </p>
      </Text>
      <IconPanel>
        <a
          href="https://www.instagram.com/carter.mcalister/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon="Instagram" />
        </a>
        <a
          href="https://www.codepen.io/cartermcalister/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon="Codepen" />
        </a>
        <a
          href="https://www.linkedin.com/in/carter-mcalister/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon="Linkedin" />
        </a>
        <a
          href="https://www.github.com/cartermcalister/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon="Github" />
        </a>
      </IconPanel>
    </Container>
  </Layout>
);

const IconPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    padding: 1rem 1.5rem;
  }
`;

export default ContactPage;
