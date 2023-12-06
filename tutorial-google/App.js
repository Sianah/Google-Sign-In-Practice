//web client ID - 508324923582-colqt82dke17aa8n8n51msqric08j9sm.apps.googleusercontent.com
//ios client ID - 508324923582-qtv5h7tf8eub87iett2ek12hu6nflpv2.apps.googleusercontent.com
//android client ID - 508324923582-ncuan2li0la71d0oe8c317lg7l3d8g6d.apps.googleusercontent.com
import * as React from 'react'; // to use some state to save info of the user
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser"; // is a browser inside the application. This just works for ios
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from "@react-native-async-storage/async-storage"; // will save user info once they login so 
                                                                        //they don't have to login each time

WebBrowser.maybeCompleteAuthSession();

export default function App() {
// code used from video
// 1. 
const[userInfo, setUserInfo] = React.useState(null); //if null we know we don't have a user signing in
// 2. 
const [] = Google.useAuthRequest({
  
  androidClientId: "508324923582-ncuan2li0la71d0oe8c317lg7l3d8g6d.apps.googleusercontent.com",
  iosClientId: "508324923582-qtv5h7tf8eub87iett2ek12hu6nflpv2.apps.googleusercontent.com",
  webClientId: "508324923582-colqt82dke17aa8n8n51msqric08j9sm.apps.googleusercontent.com"

  })



// code used from video 


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
