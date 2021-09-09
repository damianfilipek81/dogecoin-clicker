import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { changeDarkMode } from '../../../redux/darkModeRedux';
import styled from 'styled-components';
import device from '../../../utilities/deviceSettings';

const Icon = styled(Brightness5Icon)`
  color: #ebe53b;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(true);
  const dispatch = useDispatch();
  const setDarkModeHandler = () => {
    setDarkMode(!darkMode);
  };
  dispatch(changeDarkMode(darkMode));
  return (
    <Wrapper>
      <Switch checked={darkMode} onChange={setDarkModeHandler} color="default" />
      <Icon />
    </Wrapper>
  );
};

export default DarkModeButton;
