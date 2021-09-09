import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import {
  addAchievementPoints,
  addAchievementPointsPerSec,
  changeAchievementPointsPerSecVisible,
  changeAchievementPointsVisible,
} from '../../../redux/achievementsRedux';
import device from '../../../utilities/deviceSettings';

const Animation = keyframes`
0% {
  top: -15%;
}
25%,
50% {
  top: 10%;
}
100% {
  top: -20%;
}
`;

const Root = styled.div`
  font-size: 20px;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100000;
  animation: ${Animation} 10s;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  p {
    font-size: 25px;
    text-align: center;
    margin: 0;
    margin-bottom: 7px;
  }
  @media ${device.mobileL} {
    width: 80%;
    font-size: 16px;
    p {
      font-size: 18px;
    }
  }
`;

const AchievementModal = () => {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.points);
  const achievements = useSelector((state) => state.achievements);

  useEffect(() => {
    achievements.requiredPoints.forEach(
      (data) =>
        data.required <= points.total &&
        data.unlocked === false &&
        dispatch(addAchievementPoints(points.total))
    );
    achievements.requiredPoints.forEach((data) => {
      if (data.unlocked && data.seen === false) {
        setTimeout(() => {
          dispatch(changeAchievementPointsVisible(data.id));
        }, 9000);
      }
    });
    
    achievements.requiredPointsPerSec.forEach(
      (data) =>
        data.required <= points.pointsPerSec &&
        data.unlocked === false &&
        dispatch(addAchievementPointsPerSec(points.pointsPerSec))
    );
    achievements.requiredPointsPerSec.forEach((data) => {
      if (data.unlocked && data.seen === false) {
        setTimeout(() => {
          dispatch(changeAchievementPointsPerSecVisible(data.id));
        }, 9000);
      }
    });

  }, [points]);
  return (
    <div>
      {achievements.requiredPoints.map(
        (data) =>
          data.unlocked &&
          data.seen !== true && (
            <Root key={data.id}>
              <p>Achievement!</p>
              {data.description}
            </Root>
          )
      )}
      {achievements.requiredPointsPerSec.map(
        (data) =>
          data.unlocked &&
          data.seen !== true && (
            <Root key={data.id}>
              <p>Achievement!</p>
              {data.description}
            </Root>
          )
      )}
    </div>
  );
};
export default AchievementModal;
