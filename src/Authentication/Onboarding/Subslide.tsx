import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from './../../component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingTop: 10
  },
  subtitle: {
    fontFamily: 'SF-Pro-Display-Semibold',
    color: '#0C0D34',
    fontSize: 24,
    lineHeight: 32,
    paddingBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#0C0D34',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? 'Let’s get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={onPress}
      />
    </View>
  );
};

export default Subslide;
