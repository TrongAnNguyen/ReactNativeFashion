import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 37,
  },
  label: {
    fontFamily: 'SF-Pro-Display-Medium',
    fontSize: 15,
    textAlign: 'center',
  },
});
const Button = ({variant, label, onPress}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12, 13, 52, 0.05)';
  const textColor = variant === 'primary' ? 'white' : '#0C0D34';
  return (
    <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
      <Text style={[styles.label, {color: textColor}]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};
export default Button;
