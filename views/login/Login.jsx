import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = () => {
  const navigation = useNavigation()
  const goRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <View >
      <View style={estiloLogin.seccImg}>
        <Image 
          source={require('../../assets/images/elipse.png')}
        />
      </View>
      <View style={estiloLogin.vista}>
        <View>
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25,marginBottom:20}}>
            Welcome Back!
          </Text>
          <Image 
            source={require('../../assets/images/login.png')} 
            style={{width: 200, height: 200,alignSelf:'center'}}
          />
        </View>

        <View style={{marginBottom:10,marginTop:10}}>
          <Input  placeholder={"Enter your e-mail"}/>
          <Input  placeholder={"Confirm password"}/>
        </View>

        <View>

          <Text style={{color:'skyblue',fontWeight:'bold',fontSize:15,marginBottom:40,marginTop:40,justifyContent:'center',alignSelf:'center'}} onPress={goRegister} >
              Forget Password
          </Text>

          <Button text={"Log in"}/>

          <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',marginTop:10}}>
            Don´t have an account ?
            <Text style={{color:'skyblue',fontWeight:'bold',fontSize:15}} onPress={goRegister} >
               Sign up
            </Text>
          </Text>
        </View>
      </View>

    </View>
  )
}

const estiloLogin = new StyleSheet.create({
  vista:{
    width:"80%",
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center'
   // margin:30
  },
  seccImg:{
    right:50,
    marginLeft:-40,
    marginTop:-90
  }  
});

export default Login