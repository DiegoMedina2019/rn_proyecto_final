import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styleBtn.btn}>
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
      backgroundColor:`#20b2aa`,
      alignItems:'center',
      justifyContent:'center'
    },
});

export default Button