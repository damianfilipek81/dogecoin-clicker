import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import { useSelector } from 'react-redux';
import Shop from './components/views/Shop/Shop';
import About from './components/views/About/About';
import Achievements from './components/views/Achievements/Achievements';

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  const theme = {
    darkModeBackground: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
    darkModeBackgroundHover: darkMode ? 'rgba(233,233,233,0.5)' : 'rgba(33,33,33,0.5)',
    darkModeFont: darkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
    darkModeIcon: darkMode
      ? 'invert(0%) sepia(5%) saturate(17%) hue-rotate(162deg) brightness(100%) contrast(99%)'
      : 'invert(100%) sepia(100%) saturate(0%) hue-rotate(120deg) brightness(106%) contrast(102%)',
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
        </Switch>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
