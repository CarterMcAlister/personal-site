import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";
import { Text } from "../components/text";
import styled from "styled-components";
import CypherText from "../components/cypherText";

const IndexPage = () => (
  <Layout>
    <Container>
      <Text>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi there 👋</h1>
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
  "Javascript",
  "React",
  "Node.js",
  "AngularJS",
  "CSS in JS",
  "Gatsby",
  "Java",
  "HTML"
];

const FeaturedText = styled.p`
  font-size: 1.35rem;
`;

export default IndexPage;
