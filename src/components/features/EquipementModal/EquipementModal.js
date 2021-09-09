import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import device from '../../../utilities/deviceSettings';
import EquipementBox from './EquipementBox';

const Root = styled.div`
  background: ${(props) => props.theme.darkModeBackground};
  color: ${(props) => props.theme.darkModeFont};
  width: 400px;
  z-index: 999;
  border-radius: 15px;
  padding: 25px 0;
  height: 250px;

  @media ${device.mobileL} {
    order: 2;
    width: 360px;
    height: 170px;
    margin-bottom: 40px;
  }

  @media ${device.mobileS} {
    width: 300px;
    height: 210px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ShopModal = () => {
  const eq = useSelector((state) => state.shop);

  return (
    <Root>
      <Title>Equipement</Title>
      <Wrapper>
        {eq.map((data) => (
          data.count > 0 && <EquipementBox key={data.id} {...data} />
        ))}
      </Wrapper>
    </Root>
  );
};
export default ShopModal;
