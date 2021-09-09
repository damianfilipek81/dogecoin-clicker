import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import background from "../../../images/background.jpg";
import AchievementModal from "../../features/AchievementModal/AchievementModal";

const Root = styled.div`
  position: relative;
`;

const Container = styled.div`
  min-height: calc(100vh - 60px);
  padding-top: 60px;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 10%,
    #3d6f8e 40%,
    #3d6f8e 50%,
    rgba(255, 255, 255, 0) 63%,
    rgba(255, 255, 255, 0) 103.32%,
    #3d6f8e 88.32%,
    #3d6f8e 100%
  );
  mix-blend-mode: difference;
  position: absolute;
`;

const Image = styled.img`
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const MainLayout = ({ children }) => {
  return (
    <Root>
      <Header />
      <Image src={background} />
      <Overlay />
      <Container>{children}</Container>
      <AchievementModal />
      <Footer />
    </Root>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
