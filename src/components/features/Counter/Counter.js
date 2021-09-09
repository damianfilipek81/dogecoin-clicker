import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addAchievementPoints } from '../../../redux/achievementsRedux';
import { addPoint } from '../../../redux/pointsRedux';
import device from '../../../utilities/deviceSettings';
import { levelsCalc } from '../../../utilities/levels';

const Root = styled.div`
  color: rgba(255, 255, 255, 0.7);
  z-index: 999;
  h1 {
    margin: 0;
    text-align: center;
    padding-bottom: 10px;

    &:after {
      border-bottom: 2px solid rgba(255, 255, 255, 0.7);
      content: '';
      display: block;
      padding-top: 5px;
    }
  }

  p {
    margin: 0;
    margin-top: 10px;
    text-align: center;
  }

  p:first-of-type {
    font-size: 23px;
    font-weight: bold;
  }

  @media ${device.mobileL} {
    h1{
      font-size: 27px;
      margin-top: 20px;
    }
  }
  @media ${device.mobileM} {
    h1{
      font-size: 23px;
    }
    p{
      font-size: 18px;
    }
  }
`;

const Counter = () => {
  const points = useSelector((state) => state.points);
  const dispatch = useDispatch();
  useEffect(() => {
    if (points.pointsPerSec > 0) {
      const counterPerSec = setInterval(
        () => dispatch(addPoint(points.pointsPerSec / 10)),
        100
      );
      return () => clearInterval(counterPerSec);
    }
    dispatch(addAchievementPoints(points));
  }, [points.pointsPerSec]);
  return (
    <Root>
      <h1>Welcome to Doge's mine!</h1>
      <p>{points.points.toFixed(0)} dogecoins</p>
      <p>
        {points.total.toFixed(0)} total | {levelsCalc(points.total)} level
      </p>
      <p>{points.pointsPerSec} dogecoins per second</p>
    </Root>
  );
};
export default Counter;
