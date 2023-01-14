import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { userRegister } from '../../services/api';
//import { showFlashMessage } from '../../components/flashMessage';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputs = [name,email,password,confirmPassword]

  const navigation = useNavigation()
  const goLogin = () => {
    navigation.navigate("Login")
  }

  const validField = async () => {
    let b = true;
    let itemsVacios = inputs.filter(ele => {
      ele.trim();
      if (ele == '') {
        return 1
      }
    })
    console.log(itemsVacios);
    if (itemsVacios.length > 0) {
      b = false
      Alert.alert("Falta completar campos")
    }
    else if (password.length === 0) {
      b = false
      Alert.alert("la contraseña esta vacia")
    } else if (password.length < 7) {
      b = false
      Alert.alert("la contraseña debe ser mayor o igual a 7 caracteres")
    } else if (password !== confirmPassword) {
      b = false
      Alert.alert("la 2da contraseña debe ser igual a la 1era")
    }
    if (b) {
        const data = {
          name: name,
          email: email,
          password: password,
          age:20
      };
    
      try {
        const response = await userRegister(data);
        //login({ ...response.data });
        console.log(response);
         goLogin()
      } catch (e) {
        console.error('Error:', e)
        //setErrorMessage(e.response.data);
        //Alert.alert(e);
        /* showFlashMessage({
          message: t('input_validation.backend_error'),
          description: e.response.data,
          type: 'danger',
        }); */
      }
      
    }
    
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
          <Input  
            placeholder={"Enter your full name"}
            name="name"
            text={name}
            changeText={setName}
          />
          <Input  
            placeholder={"Enter your e-mail"}
            name="email"
            text={email}
            changeText={setEmail}
          />
          <Input  
            placeholder={"Enter password"}
            name="pass"
            text={password}
            changeText={setPassword}
          />
          <Input  
            placeholder={"Confirm password"}
            name="confirm_pass"
            text={confirmPassword}
            changeText={setConfirmPassword}
          />
        </View>

        <View>
          <Button text={"Register"}  pres={validField}/>

          <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',marginTop:10}}>
            Already have an account ?
            <Text style={{color:'skyblue',fontWeight:'bold',fontSize:15}} valid={goLogin}>
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