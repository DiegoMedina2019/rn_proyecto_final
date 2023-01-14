import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './views/Inicio/Inicio';
import Login from './views/login/Login';
import Register from './views/register/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlashMessage position="top" />  */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicio'>
          <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:`#dcdcdc`,
  },
});
