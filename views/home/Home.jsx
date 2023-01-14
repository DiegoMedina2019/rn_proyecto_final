import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button';
import LocalStorage from '../../services/localStorage';

const setData = () => {
  return LocalStorage.getItem('obj_login');
}

const Home =  () => {
  
  console.log( setData());
  return (
    <View >
      <View style={estiloHome.seccImg}>
        <Image 
          source={require('../../assets/images/elipse.png')}
        />
      </View>
      <View style={estiloHome.vista}>
        <View>

          <Image 
            source={require('../../assets/images/onboarding.png')} 
            style={{width: 200, height: 200,alignSelf:'center'}}
          />
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25,marginBottom:10,marginTop:25}}>
          {/*  {user.name} */}
          </Text>
          <Text style={{alignSelf:'center',fontSize:15,marginBottom:20,textAlign:'center'}}>
            {/* {token} */}
          </Text>

        </View>

        <View style={{marginTop:70}}>
          
          <Button text={"Agregar Tarea"}/>

        </View>
      </View>

    </View>
  )
}

const estiloHome = new StyleSheet.create({
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

export default Home