import React, { useEffect } from 'react';
import styled from 'styled-components';
import Clicker from '../../features/Clicker/Clicker';
import Counter from '../../features/Counter/Counter';
import ShopModal from '../../features/ShopModal/ShopModal';
import EquipementModal from '../../features/EquipementModal/EquipementModal';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { resetPointState } from '../../../redux/pointsRedux';
import device from '../../../utilities/deviceSettings';
import LoginButton from '../../features/LoginButton/LoginButton';
import { fetchUser } from '../../../redux/userRedux';

const Root = styled(Container)`
  min-height: calc(100vh - 80px);
  display: flex !important;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;

  @media ${device.mobileL} {
    height: 70vh;
  }
`;

const Reset = styled.div`
  z-index: 999;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10%;

  &:hover {
    color: #bbb;
  }

  @media ${device.mobileL} {
    order: 4;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const handler = () => {
    dispatch(resetPointState());
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Root>
      <ShopModal />
      <Wrapper>
        <Counter />
        <Clicker />
        <Reset onClick={() => handler()}>Reset game</Reset>
      </Wrapper>
      <EquipementModal />
      <LoginButton />
    </Root>
  );
};
export default Home;
