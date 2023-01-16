import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Switch, View } from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { createTask } from '../../services/api';
import { AuthContext } from '../../services/Context';

export const AddTask = () => {
  const { user,setUser,backPressed, setBackPressed } = useContext(AuthContext);
    const [tarea,setTarea] = useState('')
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
      setBackPressed(false); // me aseguro de reinicializar el estado para q se pueda listar las tareas al regregar
    }, [])
    

    const volver = () => {
        setBackPressed(true);
        navigation.goBack();
    }
    const crear = () => {
        let d = {
            token:user.token,
            task: {"description": tarea}
        }
        createTask(d).then(r=>{
            Alert.alert("Tarea creada con exito")
        })
    }

  return (
    <View >
      <View style={estiloAddTask.seccImg}>
        <Image 
          source={require('../../assets/images/elipse-seleccion-3.png')}
        />
      </View>
      <View style={estiloAddTask.vista}>

        <View style={{marginBottom:10,marginTop:10,alignItems:'center'}}>
          <Input
            placeholder={"Agregar tarea"}
            name="tarea"
            text={tarea}
            changeText={setTarea}
          />
           {/* <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            /> */}
        </View>

        <View>

          <Button text={"Crear tarea"} pres={crear}/>
          <Button text={"volver"} pres={volver}/>

        </View>
      </View>

    </View>
  )


}
const estiloAddTask = new StyleSheet.create({
    vista:{
      width:"80%",
      marginTop:-100,
      alignSelf:'center'
     // margin:30
    },
    seccImg:{
      right:50,
      marginLeft:-40,
      marginTop:-90
    },
  });