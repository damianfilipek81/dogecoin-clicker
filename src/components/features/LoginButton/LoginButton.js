import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchSavedGame, postSaveGame } from '../../../redux/apiRedux';
import device from '../../../utilities/deviceSettings';

const Save = styled.div`
  z-index: 999;
  color: #fff;
  cursor: pointer;
  padding-bottom: 10px;

  &:hover {
    color: #bbb;
  }
`;
const Login = styled.a`
  position: absolute;
  right: 25px;
  top: 90px;
  z-index: 999;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #bbb;
  }

  @media ${device.mobileS}{
    top: 133px;
  }
`;

const Load = styled.div`
  z-index: 999;
  color: #fff;
  cursor: pointer;
  padding-bottom: 10px;

  &:hover {
    color: #bbb;
  }
`;

const Logout = styled(Login)`
  position: static;
`

const Wrapper = styled.div`
  right: 10px;
  top: 90px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS}{
    top: 133px;
  }
`
const LoginButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return user.logged ? (
    <Wrapper>
      <Save onClick={() => dispatch(postSaveGame())}>Save game</Save>
      <Load onClick={() => dispatch(fetchSavedGame())}>Load game</Load>
      <Logout href="/auth/logout">Logout</Logout>
    </Wrapper>
  ) : (
    <Login href="/auth/google">Login</Login>
  );
};
export default LoginButton;
