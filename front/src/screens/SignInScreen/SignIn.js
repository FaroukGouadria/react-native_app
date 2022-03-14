/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, View,StyleSheet, useWindowDimensions, StatusBar} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
const SignIn = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {height} = useWindowDimensions();
  return (
  <View style={[styles.root, {backgroundColor:'#FF6B6B'}]}>
      <Text style={[styles.title, { height: height * 0.3 }]}>Se Connecter</Text>
      <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
      <CustomInput  placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
      <CustomButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems:'center',
    padding:50,
    marginTop:86,
    background:'#FF6B6B',
  },
  title:{
  fontSize:30,
  width:'100%',
  maxHeight:300,
  maxWidth:200,
  textTransform:'capitalize',
  lineHeight:35,
  fontWeight:'900',
  },
});

export default SignIn;
