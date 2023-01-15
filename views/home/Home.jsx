import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button';
import { Task } from '../../components/Task';
import { getAllTask } from '../../services/api';
import { AuthContext } from '../../services/Context';
import LocalStorage from '../../services/localStorage';

const Home =  () => {
  const [auth,setAuth] = useState(null)
  const [tasks,setTasks] = useState(null)
  const { user,setUser ,backPressed, setBackPressed} = useContext(AuthContext);
  const navigation = useNavigation()
  
  //me aseguro que listen nuevamente las tareas cuando hay algun CRUD y se vuelve a esta vista
  useEffect(() => {
    /* LocalStorage.getItem('obj_login').then( res => {
      setAuth(JSON.parse(res))
    }) */
    if(backPressed) getAllTask(user.token).then( r => {
      setTasks( r )
    })
  }, [backPressed])

  useEffect(() => {
    //getTask(user.token)
    getAllTask(user.token).then( r => {
      setTasks( r )
    })
  }, [])
  
  const addTask = () => {
    navigation.navigate("AddTask")
  }

  const edit = (info) => {
    console.log("Task Seleccionada : ",JSON.stringify(info))
    setUser({...user,task:info})
    navigation.navigate("EditTask")
  }

  return (
    <View>
      <View style={estiloHome.seccImg}>
        <Image 
          source={require('../../assets/images/elipse.png')}
        />
      </View>
      <View style={estiloHome.vista}>
        <View style={{height:"63%"}}>

          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25,marginBottom:10}}>
           {"Tu lista de tareas"}
          </Text>
          <ScrollView>
            <View  style={{justifyContent:'center'}}>

              {
                 tasks?.data.map(ele => {
                  return <Task 
                            key={ele._id} 
                            pres={() => edit({id:ele._id,description:ele.description} )}
                            texto={ele.description} />
                })
              }

            </View>
          </ScrollView>

        </View>

        <View style={{}}>
          
          <Button text={"Crear nueva tarea"} pres={addTask} />
          <Button text={"Sacar una foto"}/>
          <Button text={"Cerrar sesión"}/>

        </View>
      </View>

    </View>
  )
}

const estiloHome = new StyleSheet.create({
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
  task:{
    borderRadius:40,
    backgroundColor:"coral",
    height:40,
    textAlignVertical:'center',
    paddingLeft:10,
    marginBottom:10
  }
});

export default Home