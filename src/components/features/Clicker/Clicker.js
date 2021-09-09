import React, { useState } from 'react';
import styled from 'styled-components';
import doge1 from '../../../images/doge_1.png';
import doge2 from '../../../images/doge_2.png';
import { useDispatch } from 'react-redux';
import { addPoint } from '../../../redux/pointsRedux';
import device from '../../../utilities/deviceSettings';

const Root = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 60px;

  &:hover {
    width: 220px;
    height: 220px;
  }
  z-index: 999;

  @media ${device.tablet} {
    width: 150px;
    height: 150px;

    &:hover {
      width: 170px;
      height: 170px;
    }
  }
  @media ${device.mobileL} {
    top: 33%;
  }
  @media ${device.mobileS} {
    top: 30%;
  }
`;

const Clicker = () => {
  const [click, setClick] = useState(true);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setClick(!click);
    dispatch(addPoint(1));
  };
  return (
    <Root
      src={click ? doge1 : doge2}
      onClick={() => clickHandler()}
      draggable="false"
    />
  );
};
export default Clicker;
