import React from 'react'
import { StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import Button from '../../components/Button';

const Register = () => {
  return (
    <View style={estiloRegister.contenedor}>
      <Text style={{fontWeight:'bold'}}>welcome Onboard!</Text>
      <Text>Let´s help you meet up your tasks</Text>

      {/* Inputs */}
      <TextInput  placeholder={"Enter your full name"}/>
      <TextInput  placeholder={"Enter your e-mail"}/>
      <TextInput  placeholder={"Enter password"}/>
      <TextInput  placeholder={"Confirm password"}/>


      {/* Buton */}
      <Button text={"Register"}/>

      <Text>Already have an account ? 
        <Text style={{color:'skyblue',fontWeight:'bold'}} >
          Sign in
        </Text>
      </Text>

    </View>
  )
}

const estiloRegister = new StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:'#f0ffff',

  },
  fuente:{

  }  
});

export default Register