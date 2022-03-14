/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View,StyleSheet, useWindowDimensions, TextInput} from 'react-native';

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View >
      <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
       onChangeText={setValue}
       secureTextEntry={secureTextEntry}
       />
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    backgroundColor:'white',
    width:'100%',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:10,
},
input:{

},
});
export default CustomInput;
