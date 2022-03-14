/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import RNBootSplash from 'react-native-bootsplash';
import {COLORS, SIZES} from './android/app/src/constants/theme';
import Login from './screens/Login';
import SignInScreen from './src/screens/SignInScreen';
const slides = [
  {
    id: 1,
    title: 'screen1',
    descreption:
      'Nulla incididunt aliqua cillum nisi id do deserunt consequat.',
    image: require('./assets/screen1.png'),
  },
  {
    id: 2,
    title: 'screen2',
    descreption:
      'Nulla incididunt aliqua cillum nisi id do deserunt consequat.',
    image: require('./assets/screen2.png'),
  },
  {
    id: 3,
    title: 'screen3',
    descreption:
      'Nulla incididunt aliqua cillum nisi id do deserunt consequat.',
    image: require('./assets/screen3.png'),
  },
];

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  const [showHomePage, setShowHomePage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isFirstTime, setFirstTime] = useState(false);
  const checkForFIrstTime = () => {};
  useEffect(() => {
    checkForFIrstTime();
  }, []);
  const buttonLabel = label => {
    return (
      <View style={{padding: 12}}>
        <Text
          style={{color: COLORS.title, fontWeight: '600', fontSize: SIZES.h3}}>
          {label}
        </Text>
      </View>
    );
  };
  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
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
                source={item.image}
                style={{width: SIZES.width - 80, height: 400}}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 20,
                  color: COLORS.title,
                }}>
                {item.descreption}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }

  return (
    <>
      <SafeAreaView style={styles.root}>
        <SignInScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FF6B6B',
  },
});
export default App;
