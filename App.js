import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/login/Login';
import Register from './views/register/Register';

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
      {/* <Login /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:`#dcdcdc`,
  },
});
