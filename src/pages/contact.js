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
          `web`,
          `gatsby`
        ]}
      />
      <Text>
        <h1>Contact Me</h1>
        <p>
          Want to hire me for a project, have a question about something, or
          just want to say hello? You can message me on{" "}
          <a
            href="https://twitter.com/CarterMcaIister/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          , or <a href="https://t.me/carterm" 
                  target="_blank"
                  rel="noopener noreferrer">Telegram</a>.
        </p>
      </Text>
      <IconPanel>
        <a
          href="https://twitter.com/CarterMcaIister"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon="Twitter" />
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
