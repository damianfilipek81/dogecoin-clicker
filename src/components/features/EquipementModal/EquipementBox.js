import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../../utilities/deviceSettings';
import Icon from '../../common/Icon/Icon';

const Root = styled.div`
  width: 150px;
  height: 50px;
  border: 2px solid ${(props) => props.theme.darkModeFont};
  margin: 2px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 110px;
    height: 45px;
  }
`;

const CountWrapper = styled.div`
  width: 50px;
  height: 50px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const Description = styled.div`
  position: absolute;
  left: -33px;
  top: -80px;
  border-radius: 15px;
  background: rgba(233, 233, 233, 0.9);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 15px 0;

  p {
    margin: 0;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
  }
  p:first-of-type {
    margin-bottom: 6px;
  }

  @media ${device.tablet} {
    width: 170px;
    left: -28px;
    top: -100px;
    p{
      font-size: 16px;
    }
  }
`;

const ShopBox = ({ image, price, name, pointsPerSec, count }) => {
  const [hover, setHover] = useState(false);

  return (
    <Root
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon image={image} />
      <CountWrapper>
        <p>{count}</p>
      </CountWrapper>
      {hover && (
        <Description>
          <p>{name}</p>
          <p>Gives total: +{pointsPerSec * count} dogecoins per sec</p>
        </Description>
      )}
    </Root>
  );
};
export default ShopBox;
