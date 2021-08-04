import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Skills from "../components/Skills";

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Navbar />
      <div className="section">
        <Content />
        <Skills />
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;

  .section {
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
  }
`;

export default About;