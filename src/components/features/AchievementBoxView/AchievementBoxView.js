import React from 'react';
import styled from 'styled-components';
import device from '../../../utilities/deviceSettings';

const Root = styled.div`
  background: ${(props) => props.theme.darkModeBackground};
  width: 100%;
  height: 80px;
  z-index: 150;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 25px 0;
  p {
    font-size: 30px;
    margin: 0;
    color: ${(props) => props.theme.darkModeFont};
    font-weight: bold;
  }
  p:nth-of-type(2) {
    font-size: 25px;
  }

  &:hover {
    background: ${(props) => props.theme.darkModeBackgroundHover};
  }
  @media ${device.mobileL} {
    height: 60px;
    margin: 20px 0;
    p{
      font-size: 20px;
    }
    p:nth-of-type(2) {
      font-size: 18px;
    }
  }
`;
const AchievementBoxView = ({ description }) => (
  <Root>
    <p>Achievement</p>
    <p>{description}</p>
  </Root>
);

export default AchievementBoxView;
