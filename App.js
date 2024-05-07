
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='white-content'/>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000000",
  },
});
