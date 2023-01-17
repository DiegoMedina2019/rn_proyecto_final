import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { userRegister } from '../../services/api';
import { AuthContext } from '../../services/Context';
//import { showFlashMessage } from '../../components/flashMessage';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useContext(AuthContext);

  const inputs = [name,email,password,confirmPassword]

  const navigation = useNavigation()
  const goLogin = () => {
    console.log("hey");
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
        password: password
      };
    
      try {
        const response = await userRegister(data);
        console.log(response);
        if ( typeof response == 'string' && response.split(' ')[0] == 'E11000') {
          Alert.alert("¡Este usuario ya fue registrado!")
          setName('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
        }else{
          login({ ...response });
          goLogin()
        }
      } catch (e) {
        console.error('userRegister -> Error:', e)
      }
      
    }
    
  }

  return (
    <View >
      <View style={estiloRegister.seccImg}>
        <Image 
          //style={{margin:0,padding:0}}
          source={require('../../assets/images/elipse-seleccion-3.png')}
        />
      </View>
      <View style={estiloRegister.vista}>
        <View>
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25}}>
            ¡Bienvenido campeon del mundo!
          </Text>
          <Text style={{alignSelf:'center',fontSize:15,marginTop:10}}>
            Aqui te ayudamos a organizar tus tareas
          </Text>
        </View>

        <View style={{marginBottom:60,marginTop:60}}>
          <Input  
            placeholder={"Ingresa tu nombre completo"}
            name="name"
            text={name}
            changeText={setName}
          />
          <Input  
            placeholder={"Ingresa tu E-mail"}
            name="email"
            text={email}
            changeText={setEmail}
          />
          <Input  
            placeholder={"Ingresa tu contraseña"}
            name="pass"
            text={password}
            changeText={setPassword}
            segura={true}
          />
          <Input  
            placeholder={"Confirma tu contraseña"}
            name="confirm_pass"
            text={confirmPassword}
            changeText={setConfirmPassword}
            segura={true}
          />
        </View>

        <View style={{flexDirection:'column',alignItems:'center'}}>
          <Button text={"Registrarse"}  pres={validField} width={320} mrL={20}/>

          <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',marginTop:15}}>
            Ya tienes una cuenta ?
            <Text style={{color:'#bfb240',fontWeight:'bold',fontSize:15}} onPress={goLogin}>
              Logueate
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