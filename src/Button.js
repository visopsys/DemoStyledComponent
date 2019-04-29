import React from 'react';
import styled, { withTheme } from 'styled-components';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import { flattenStyle } from './utils'

const Message = styled(Text)`
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.colors.text.primary};
  align-items: center;
  justify-content: center;
`

const Button = ({
  title,
  onPress,
  style,
  theme
}) => {
  const baseStyle = {
    width: 236,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.text.inverted,
    borderRadius: 5,
    fontSize: 24
  }

  const finalStyle = flattenStyle([baseStyle, style])

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={finalStyle}>
        <Message fontSize={finalStyle.fontSize}>{title}</Message>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default withTheme(Button);