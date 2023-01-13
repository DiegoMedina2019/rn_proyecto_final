import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';

const Register = () => {
  const navigation = useNavigation()
  const goLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <View >
      <View style={estiloRegister.seccImg}>
        <Image 
          //style={{margin:0,padding:0}}
          source={require('../../assets/images/elipse.png')}
        />
      </View>
      <View style={estiloRegister.vista}>
        <View>
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25}}>
            Welcome Onboard!
          </Text>
          <Text style={{alignSelf:'center',fontSize:15,marginTop:10}}>
            Let´s help you meet up your tasks
          </Text>
        </View>

        <View style={{marginBottom:60,marginTop:60}}>
          <Input  placeholder={"Enter your full name"}/>
          <Input  placeholder={"Enter your e-mail"}/>
          <Input  placeholder={"Enter password"}/>
          <Input  placeholder={"Confirm password"}/>
        </View>

        <View>
          <Button text={"Register"}  pres={goLogin} />

          <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',marginTop:10}}>
            Already have an account ?
            <Text style={{color:'skyblue',fontWeight:'bold',fontSize:15}} onPress={goLogin}>
               Sign in
            </Text>
          </Text>
        </View>
      </View>

    </View>
  )
}

const estiloRegister = new StyleSheet.create({
  vista:{
    width:"80%",
    justifyContent:'center',
    alignContent:'center',
    margin:30
  },
  seccImg:{
    //height:"25%",
    right:50,
    marginLeft:-40,
    marginTop:-90
  }  
});

export default Register