import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { userLogin } from '../../services/api';
import { AuthContext } from '../../services/Context';
import LocalStorage from '../../services/localStorage';


const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);


  const goRegister = () => {
    navigation.navigate('Register')
  }

  const valid = async () => {
    let b = true
    if (email.trim() == '') {
      b = false
      Alert.alert("El Campo Email es requerido")
    }
    if (password.length === 0 || password.length < 7) {
      b = false
      Alert.alert("El Campo Password debe tener al menos 7 caracteres o mas")
    }


    if (b) {
      const data = {
        email: email,
        password: password
      };
    
      try {
        const response = await userLogin(data);
        if ( typeof response == 'string' ) {
          Alert.alert("¡Usuario no encontrado!")
          setEmail('')
          setPassword('')
        }else{
          login({ ...response });
          navigation.navigate('Home')
        }
      } catch (e) {
        console.error('userLogin -> Error:', e)
      }
      
    }

  }

  return (
    <View >
      <View style={estiloLogin.seccImg}>
        <Image 
          source={require('../../assets/images/elipse-seleccion-3.png')}
        />
      </View>
      <View style={estiloLogin.vista}>
        <View>
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25,marginBottom:20}}>
            ¡Bienvenido de nuevo!
          </Text>
          <Image 
            source={require('../../assets/images/login-1.png')} 
            style={{width: 200, height: 200,alignSelf:'center'}}
          />
        </View>

        <View style={{marginBottom:10,marginTop:10}}>
          <Input
            placeholder={"Ingresa tu E-mail"}
            name="email"
            text={email}
            changeText={setEmail}
          />
          <Input
            placeholder={"Ingresa tu contraseña"}
            name="password"
            text={password}
            changeText={setPassword}
            segura={true}
          />
        </View>

        <View>

          <Text style={{color:'#bfb240',fontWeight:'bold',fontSize:15,marginBottom:40,marginTop:40,justifyContent:'center',alignSelf:'center'}} onPress={goRegister} >
              Olvide mi contraseña
          </Text>

          <Button text={"Iniciar sesión"} pres={valid} margin={5}/>

          <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',marginTop:10}}>
            ¿No tienes una cuenta?
            <Text style={{color:'#bfb240',fontWeight:'bold',fontSize:15}} onPress={goRegister} >
              Regístrate
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