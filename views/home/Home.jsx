import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button';
import { Task } from '../../components/Task';
import { deleteTask, getAllTask } from '../../services/api';
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
    if (!user.isLoggedIn) {
      Alert.alert("¡Hey espera!...Primero debes loguearte!")
      navigation.navigate("Login")
    }else{

      getAllTask(user.token).then( r => {
        setTasks( r )
      })

    }
  }, [])
  
  const addTask = () => {
    navigation.navigate("AddTask")
  }

  const edit = (info) => {
    console.log("Task Seleccionada : ",JSON.stringify(info))
    setUser({...user,task:info})
    navigation.navigate("EditTask")
  }

  const logout = () => {
    const auth = {
      user: undefined,
      isLoggedIn: false,
      token: '',
      task:{}
    };
    setUser(auth)
    //navigation.navigate("Login")
    navigation.navigate("Inicio")
  }

  return (
    <View>
      <View style={estiloHome.seccImg}>
        <Image 
          source={require('../../assets/images/elipse-seleccion-3.png')}
        />
      </View>
      <View style={estiloHome.vista}>
        <View style={{height:"66%"}}>

          <Image 
            source={require('../../assets/images/Logo-AFA.png')}
            style={{width:150,height:150,alignSelf:'center'}}
          />
          <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:25,marginBottom:10}}>
           {"Tu lista de tareas"}
          </Text>
          <ScrollView>
            <View  style={{justifyContent:'center'}}>

              {
                 tasks?.data.map(ele => {
                  return <Task 
                          key={ele._id}
                          pres={() => edit({id:ele._id,description:ele.description,completed:ele.completed} )}
                          task={ele} />
                })
              }

            </View>
          </ScrollView>

        </View>

        <View style={{}}>
          
          <Button height={50} text={"Crear nueva tarea"} pres={addTask} />
          <Button height={50} text={"Cambiar imagen"}/>
          <Button height={50} text={"Cerrar sesión"} pres={logout}/>

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