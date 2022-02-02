import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { Text } from "../components/text";
import CypherText from "../components/cypherText";

const IndexPage = () => (
  <Layout>
    <Container>
      <Text>
        <SEO
          title="Home"
          keywords={[
            `software engineer`,
            `developer`,
            `react`,
            `front-end`,
            `web`,
            `gatsby`
          ]}
        />
        <h1>
          Hi there{" "}
          <span role="img" aria-label="Wave">
            👋
          </span>
        </h1>
        <FeaturedText>
          I'm Carter McAlister, a Software Engineer from Texas.
        </FeaturedText>
        <FeaturedText>
          I build things using <CypherText textList={textList} delay={1000} />
        </FeaturedText>
      </Text>
    </Container>
  </Layout>
);

const textList = [
  "Typescript",
  "React",
  "Node.js",
  "Solidity",
  "CSS in JS",
];

const FeaturedText = styled.p`
  font-size: 1.35rem;
`;

export default IndexPage;
