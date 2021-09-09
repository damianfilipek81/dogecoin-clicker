import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../../common/Icon/Icon';
import dogecoin from '../../../images/dogecoin.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addPointPerSec, removePoint } from '../../../redux/pointsRedux';
import { addEqCount, increasePrice } from '../../../redux/shopRedux';
import device from '../../../utilities/deviceSettings';

const Root = styled.div`
  width: 150px;
  height: 50px;
  border: 2px solid ${(props) => props.theme.darkModeFont};
  margin: 2px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: space-around;

  @media ${device.tablet} {
    width: 110px;
    height: 45px;
  }
`;

const PriceWrapper = styled.div`
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

const DogeCoin = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 4px;

  @media ${device.tablet} {
    width: 15px;
    height: 15px;
  }
`;

const Description = styled.div`
  position: absolute;
  left: -33px;
  top: -100px;
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
    p{
      font-size: 16px;
    }
  }
`;

const ShopBox = ({ image, price, name, pointsPerSec, newPrice, id }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const points = useSelector((state) => state.points.points);

  const handler = () => {
    if (points >= price) {
      dispatch(addPointPerSec(pointsPerSec));
      dispatch(removePoint(price));
      dispatch(increasePrice({ newPrice, id }));
      dispatch(addEqCount({ count: 1, id }));
    }
  };
  const mln = 1000 * 1000;
  return (
    <Root
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handler()}
    >
      <Icon image={image} />
      <PriceWrapper>
        <DogeCoin src={dogecoin} />
        <p>{(price >= 1000 && price < mln) ? (price / 1000).toFixed(1)+`k` : price >= mln ? (price / mln).toFixed(1)+`mln` : price}</p>
      </PriceWrapper>
      {hover && (
        <Description>
          <p>{name}</p>
          <p>Price: {price} dogecoins</p>
          <p>Gives: +{pointsPerSec} dogecoins per sec</p>
        </Description>
      )}
    </Root>
  );
};
export default ShopBox;
