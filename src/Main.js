import React, { useState } from 'react';
import { Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';

import theme from './theme'

const FullScreen = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
`

const Info = styled(Text)`
  margin-left: 40px;
  margin-right: 40px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.text.primary};
`

const Bottom = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100px;
  flex-direction: row;
  background-color: #777777;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

const LightThemeButton = styled(Button).attrs({
  title: 'Light Theme'
})`
  width: 100px;
`

const DarkThemeButton = styled(Button).attrs({
  title: 'Dark Theme'
})`
  width: 100px;
`

const ColorThemeButton = styled(Button).attrs({
  title: 'Color Theme'
})`
  width: 100px;
`

export default () => {
  const [appTheme, setAppTheme] = useState('lightTheme');

  const onAppThemeChanged = (newTheme) => {
    setAppTheme(newTheme);
  }

  return (
    <ThemeProvider theme={theme[appTheme]}>
      <FullScreen>
        <Info>Click on button below to change app theme.</Info>
        <Bottom>
          <LightThemeButton onPress={() => onAppThemeChanged('lightTheme')}/>
          <DarkThemeButton onPress={() => onAppThemeChanged('darkTheme')}/>
          <ColorThemeButton onPress={() => onAppThemeChanged('colorTheme')}/>
        </Bottom>
      </FullScreen>
    </ThemeProvider>
  )
}