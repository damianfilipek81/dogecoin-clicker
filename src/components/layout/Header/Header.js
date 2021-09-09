import styled from "styled-components";
import React from "react";
import DarkModeButton from "../../features/DarkModeButton/DarkModeButton";
import { Container } from "@material-ui/core";
import NavButton from "../../common/NavButton/NavButton";
import device from "../../../utilities/deviceSettings";

const Root = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 9999;
  background: rgba(0,0,0,0.6);
  background: ${props => props.theme.darkModeBackground};

  @media ${device.mobileM} {

  }
`;

const ContainerRoot = styled(Container)`
  position: relative;
  display: flex !important;
  align-items: center;
  height: 100%;
`;

const Header = () => {
  return (
    <Root>
      <ContainerRoot>
        <NavButton link='/'>Home</NavButton>
        <NavButton link='/achievements'>Achievements</NavButton>
        <NavButton link='/shop'>Shop</NavButton>
        <NavButton link='/about'>About author</NavButton>
        <DarkModeButton />
      </ContainerRoot>
    </Root>
  );
};

export default Header;