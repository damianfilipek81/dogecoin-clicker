import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 20px;
  background: ${(props) => props.theme.darkModeBackground};
  color: ${(props) => props.theme.darkModeFont};
  width: 100%;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  z-index: 9999;
`;
const Footer = () => <Root>Made by Damian Filipek 2021 ©</Root>;

export default Footer;
