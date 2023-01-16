import React, { useContext, useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { deleteTask } from '../services/api';
import { AuthContext } from '../services/Context';


export const Task = ({task, pres}) => {
    const { user,setUser,backPressed, setBackPressed } = useContext(AuthContext);

    useEffect(() => {
        setBackPressed(false); // me aseguro de reinicializar el estado para q se pueda listar las tareas al regregar
    }, [])

    const eliminar = (id) => {
        console.log("pres delete");
        return Alert.alert(
            "Estas seguro de eliminar la Tarea?",
            "¡si eliminas esta tareas no habra vuelta atras!",
            [
              {
                text: "SI",
                onPress: () => {
                    let d = {
                        task_id:id,
                        token:user.token
                    }
                    deleteTask(d).then(r=>{
                        setBackPressed(true);
                        Alert.alert("Tarea Eliminada con exito")
                    })
                },
              },
              {
                text: "NO",
              },
            ]
        );
    }

    const color = task.completed ? '#32cd32' : 'coral' 

  return (
    <View style={{flexDirection:'row'}}>

        <Text 
            style={[estiloTask.task,{backgroundColor:color}]} 
            onPress={pres} >
                {task.description}
        </Text>
        <TouchableOpacity onPress={() => eliminar(task._id)}>
            <Image source={require('../assets/images/icon-basura.png')} style={{width:40,height:40}}  />
        </TouchableOpacity>

    </View>
  )
}

const estiloTask = new StyleSheet.create({
    task:{
      width:"90%",
      borderRadius:40,
      height:40,
      textAlignVertical:'center',
      paddingLeft:10,
      marginBottom:10
    }
  });
