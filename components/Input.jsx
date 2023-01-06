import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const Input = ({placeholder}) => {
  return (
    <TextInput 
        style={styleInput.input}
        placeholder={placeholder}
    />
  )
}

const styleInput = new StyleSheet.create({
    input: {
        height: 50,
        margin: 5,
        borderRadius:50,
        paddingLeft: 30,
        backgroundColor:`#f8f8ff`,
        width:"100%"
      },
});

export default Input