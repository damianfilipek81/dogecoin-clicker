import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AchievementBoxView from '../../features/AchievementBoxView/AchievementBoxView';
import { Container } from '@material-ui/core';

const Root = styled(Container)`
  min-height: calc(100vh - 80px);
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const Wrapper = styled.div`
  z-index: 999;
  width: 100%;
`;

const Info = styled.p`
  font-size: 50px;
  color: #fff;
  text-align: center;
`;
const Achievements = () => {
  const achievements = useSelector((state) => state.achievements);
  const arr = [];
  achievements.requiredPoints.map((data) => data.unlocked && arr.push(data));
  achievements.requiredPointsPerSec.map((data) => data.unlocked && arr.push(data));

  return (
    <Root>
      <Wrapper>
        {arr.map(
          (data, i) =>
            data.unlocked && (
              <AchievementBoxView {...data} key={i}>
                <p>Achievement!</p>
                {data.description}
              </AchievementBoxView>
            )
        )}
        {arr.length < 1 && <Info>You have no achievements yet!</Info>}
      </Wrapper>
    </Root>
  );
};
export default Achievements;
