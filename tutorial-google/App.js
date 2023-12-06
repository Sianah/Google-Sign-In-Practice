//web client ID - 508324923582-colqt82dke17aa8n8n51msqric08j9sm.apps.googleusercontent.com
//ios client ID - 508324923582-qtv5h7tf8eub87iett2ek12hu6nflpv2.apps.googleusercontent.com
//android client ID - 508324923582-ncuan2li0la71d0oe8c317lg7l3d8g6d.apps.googleusercontent.com
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
