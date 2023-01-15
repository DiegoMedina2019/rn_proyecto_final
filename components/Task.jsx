import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Task = ({texto, pres}) => {
  return (
    <View style={{flexDirection:'row'}} >
        <Text 
            style={estiloTask.task} 
            onPress={pres} >
                {texto}
        </Text>
        <Image 
            source={require('../assets/images/icon-basura.png')}
            style={{width:35,height:35}} />
    </View>
  )
}

const estiloTask = new StyleSheet.create({
    task:{
      width:"90%",
      borderRadius:40,
      backgroundColor:"coral",
      height:40,
      textAlignVertical:'center',
      paddingLeft:10,
      marginBottom:10
    }
  });
