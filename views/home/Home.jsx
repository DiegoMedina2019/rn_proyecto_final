import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../../components/Button';
import { Task } from '../../components/Task';
import { deleteTask, getAllTask } from '../../services/api';
import { AuthContext } from '../../services/Context';
import LocalStorage from '../../services/localStorage';
import * as ImagePicker from 'expo-image-picker';


const Home =  () => {

  const [auth,setAuth] = useState(null)
  const [tasks,setTasks] = useState(null)
  const [image, setImage] = useState(null);
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

  const upList = () => {
    getAllTask(user.token).then( r => {
      setTasks( r )
    })
  }

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
  //let logo = '../../assets/images/Logo-AFA.png';
  const takeImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <View>
      <View style={estiloHome.seccImg}>
        <Image 
          source={require('../../assets/images/elipse-seleccion-3.png')}
        />
      </View>
      <View style={estiloHome.vista}>
        <View style={{height:"80%"}}>
        
        {
          image? <Image source={{ uri: image }} style={{width:150,height:150,alignSelf:'center',borderRadius:80}} /> : <Image 
            source={require('../../assets/images/Logo-AFA.png')}
            style={{width:150,height:150,alignSelf:'center'}}
          />
        }
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
                          task={ele} 
                          upList={upList}/>
                })
              }

            </View>
          </ScrollView>

        </View>

        <View style={estiloHome.seccBtn}>
          
        <TouchableOpacity 
            onPress={addTask} 
            text={"Crear nueva tarea"} 
            style={estiloHome.btn}>

            <Image source={require('../../assets/images/add-tarea.png')} style={{width:40,height:40}}  />

        </TouchableOpacity>
        <TouchableOpacity 
            onPress={logout} 
            text={"Cambiar imagen"}
            style={[estiloHome.btn]}
            >

            <Image source={require('../../assets/images/salida-3.png')} style={{width:50,height:50}}  />

        </TouchableOpacity>

        <TouchableOpacity 
            onPress={takeImage} 
            text={"Cambiar imagen"}
            style={estiloHome.btn}
            >

            <Image source={require('../../assets/images/Camara.png')} style={{width:40,height:40}}  />

        </TouchableOpacity>
          
          {/* <Button height={50} width={160} text={"Crear nueva tarea"} pres={addTask} />
          <Button height={50} width={160} text={"Cambiar imagen"} pres={takeImage} /> */}
          {/* <Button height={50} text={"Cerrar sesión"} pres={logout}/> */}

        </View>
      </View>

    </View>
  )
}

const estiloHome = new StyleSheet.create({
  vista:{
    width:"90%",
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
  },
  seccBtn:{
    flexDirection:'row',
    width:"100%",
    height:"10%",
    justifyContent:'space-between',
    top:-60
  },
  btn: {
    height: 60,
    //margin: 5,
    borderRadius:50,
    padding: 10,
    width:"100%",
    backgroundColor:`#8ed1fc`,
    alignItems:'center',
    justifyContent:'center',
    width:100
  },
});

export default Home