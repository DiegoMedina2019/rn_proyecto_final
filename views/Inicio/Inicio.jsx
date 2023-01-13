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
          source={require('../../assets/images/elipse.png')}
        />
      </View>
      <View style={estiloInicio.vista}>
        <View>

          <Image 
            source={require('../../assets/images/onboarding.png')} 
            style={{width: 200, height: 200,alignSelf:'center'}}
          />
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25,marginBottom:10,marginTop:25}}>
            Get things done with TODO
          </Text>
          <Text style={{alignSelf:'center',fontSize:15,marginBottom:20,textAlign:'center'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam odio quis cum alias. Delectus illo repellendus fuga odit fugiat praesentium atque similique iure nisi reiciendis consequuntur, nemo esse vitae.
          </Text>

        </View>

        <View style={{marginTop:70}}>
          
          <Button text={"Get Started"} pres={goRegister}/>

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