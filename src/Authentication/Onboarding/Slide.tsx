import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 120,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SF-Pro-Display-Bold',
    color: 'white',
    textAlign: 'center',
  },
});
interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({title, right}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: ((right ? 1 : -1) * width) / 3},
    {rotateZ: '90deg'},
  ];

  return (
    <View style={styles.container}>
      <View style={[{transform}, styles.titleContainer]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
