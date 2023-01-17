import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native';

const Input = ({placeholder,name,text,changeText,segura}) => {

    //const [text, onChangeText] = useState('');
    
  return (
    <>
      <TextInput 
          style={styleInput.input}
          placeholder={placeholder}
          name={name}
          value={text}
          onChangeText={changeText}
          secureTextEntry={segura}
      />
      {/* {errors?.name && <Text>{errors.name}</Text>} */}
    </>
  )
}

const styleInput = new StyleSheet.create({
    input: {
        height: 50,
        margin: 5,
        borderRadius:50,
        paddingLeft: 30,
        backgroundColor:`#f8f8ff`,
        width:"100%",
        borderColor:"#d2c179",
        borderWidth:1
      },
});

export default Input