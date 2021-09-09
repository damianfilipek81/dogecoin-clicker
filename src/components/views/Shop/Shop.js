import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`;
const Info = styled.div`
  text-align: center;
  font-size: 50px;
  z-index: 999;
  color: #fff;
`;

const Shop = () => (
  <Root>
    <Info>Available soon!</Info>
  </Root>
);

export default Shop;
