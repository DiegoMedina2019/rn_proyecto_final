import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'

const Button = ({text, pres,height}) => {
  return (
    <TouchableOpacity style={[styleBtn.btn,{height:height}]} onPress={pres}>
        <Text style={{color:"white",fontSize:20}}>
          {text}
        </Text>
    </TouchableOpacity>
  )
}

const styleBtn= new StyleSheet.create({
  btn: {
      height: 60,
      margin: 5,
      borderRadius:25,
      padding: 10,
      width:"100%",
      backgroundColor:`#8ed1fc`,
      alignItems:'center',
      justifyContent:'center'
    },
});

export default Button