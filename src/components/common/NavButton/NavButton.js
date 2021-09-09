import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import device from "../../../utilities/deviceSettings";

const Root = styled(Link)`
  color: ${(props) => props.theme.darkModeFont};
  text-decoration: none;
  font-size: 30px;
  padding-right: 25px;
  position: relative;
  &::after {
    content: "";
    width: 0;
    height: 2px;
    display: inline-block;
    background: ${props => props.theme.darkModeFont};
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 15px;
    transition: all 1s;
  }
  &:hover::after {
    width: 85%;
  }

  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
    padding-right: 12px;
  }
  @media ${device.mobileS} {
    font-size: 17px;
    padding-right: 4px;
    &::after{
      height: 1px;
    }
  }
`;

const NavButton = ({ children, link }) => {
  return <Root to={link}>{children}</Root>;
};

NavButton.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};
export default NavButton;
