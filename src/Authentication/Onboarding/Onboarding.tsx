import React, {useState, useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  interpolateColors,
  divide,
  multiply,
  Value,
} from 'react-native-reanimated';

import Slide, {SLIDE_HEIGHT} from './Slide';
import Subslide from './Subslide';
import Dot from './../../component';

const {width} = Dimensions.get('window');
const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerMain: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  pagination: {
    width,
    flexDirection: 'row',
    height: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      'Confused about your outfit? Don’t\nworry! Find the best outfit here!',
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your\nwardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Exentric',
    subtitle: 'Your Style, Your Way',
    description:
      ' Create your individual & unique\nstyle and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and\nexplore your personality',
    color: '#FFDDDD',
  },
];

const Onboarding = () => {
  const [x] = useState(new Value(0));
  const scrollRef = useRef<any>(null);
  const backgroundColor = interpolateColors(x, {
    inputRange: slides.map((_, i) => i * width),
    outputColorRange: slides.map((slide) => slide.color),
  });
  const onScrollEvent = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x,
          },
        },
      },
    ],
    {useNativeDriver: false},
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={160}
          onScroll={onScrollEvent}>
          {slides.map(({title}, idx) => (
            <Slide key={idx} title={title} right={!!(idx % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <Dot key={index} index={index} currentIndex={divide(x, width)} />
          ))}
        </View>
        <Animated.View
          style={[
            styles.footerMain,
            {
              width: width * slides.length,
              transform: [{translateX: multiply(x, -1)}],
            },
          ]}>
          {slides.map(({subtitle, description}, idx) => (
            <Subslide
              key={idx}
              subtitle={subtitle}
              description={description}
              last={idx === slides.length - 1}
              onPress={() => {
                if (scrollRef.current) {
                  scrollRef.current.getNode().scrollTo({
                    x: width * (idx + 1),
                    animated: true,
                  });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
