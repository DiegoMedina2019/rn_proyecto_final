import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button';

const Inicio = () => {

  const navigation = useNavigation()

  const goRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <View >
      <View style={estiloInicio.seccImg}>
        <Image 
          source={require('../../assets/images/elipse-seleccion-3.png')}
        />
      </View>
      <View style={estiloInicio.vista}>
        <View>

          <Image 
            source={require('../../assets/images/img-inicio.png')} 
            style={{width: 200, height: 200,alignSelf:'center'}}
          />
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25,marginBottom:10,marginTop:25}}>
            ¡¡¡Somos campeones del mundo Carajo!!!
          </Text>
          <Text style={{alignSelf:'center',fontSize:15,marginBottom:20,textAlign:'center'}}>
            Muchachooos, ahora lo volvimos a ilusionar...
          </Text>

        </View>

        <View style={{marginTop:70}}>
          
          <Button text={"Comenzar"} pres={goRegister}/>

        </View>
      </View>

    </View>
  )
}

const estiloInicio = new StyleSheet.create({
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

export default Inicio