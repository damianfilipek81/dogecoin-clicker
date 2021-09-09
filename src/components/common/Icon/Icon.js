import React from 'react';
import styled from 'styled-components';
import device from '../../../utilities/deviceSettings';

const Root = styled.img`
  width: 45px;
  height: 45px;
  filter: ${(props) => props.theme.darkModeIcon};

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
  }
`;
const Icon = ({image}) => <Root src={image} />;

export default Icon;
