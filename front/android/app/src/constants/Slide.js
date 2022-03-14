/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Dimensions, Text,Image} from 'react-native';
import {COLORS, SIZES} from "./android/app/src/constants/theme";

const Slide = ({item}) => {
  const {image,title, descreption} = item;
  return (
    <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 100,
                backgroundColor: '#ffffff',
              }}>
              <Image
                source={image}
                style={{width: SIZES.width - 80, height: 400}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}>
                {title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 20,
                  color: COLORS.title,
                }}>
                {descreption}
              </Text>
            </View>
  );
};
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Slide;
