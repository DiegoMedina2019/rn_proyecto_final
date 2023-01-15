import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './views/Inicio/Inicio';
import Login from './views/login/Login';
import Register from './views/register/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlashMessage from "react-native-flash-message";
import Home from './views/home/Home';
import { UserProvider } from './services/Context';
import { AddTask } from './views/task/AddTask';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>

      <View style={styles.container}>
        {/* <FlashMessage position="top" />  */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            {/* <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
             */}
             <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="AddTask" component={AddTask} options={{headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer>

      </View>

    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:`#dcdcdc`,
  },
});
