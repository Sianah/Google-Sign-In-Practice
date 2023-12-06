//web client ID - 508324923582-colqt82dke17aa8n8n51msqric08j9sm.apps.googleusercontent.com
//ios client ID - 508324923582-qtv5h7tf8eub87iett2ek12hu6nflpv2.apps.googleusercontent.com
//android client ID - 508324923582-ncuan2li0la71d0oe8c317lg7l3d8g6d.apps.googleusercontent.com
import * as React from 'react'; // to use some state to save info of the user
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
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
const [request, response, promptAsync] = Google.useAuthRequest({ //how this hook will know which application the user opened
  
  androidClientId: "508324923582-ncuan2li0la71d0oe8c317lg7l3d8g6d.apps.googleusercontent.com",
  iosClientId: "508324923582-qtv5h7tf8eub87iett2ek12hu6nflpv2.apps.googleusercontent.com",
  webClientId: "508324923582-colqt82dke17aa8n8n51msqric08j9sm.apps.googleusercontent.com"

  })

// 5.
async function handleSignInWithGoogle(){
  const user = await AsyncStorage.getItem("@user");
  if (!user){

  }
  else{
    setUserInfo(JSON.parse(user));
  }
}

//6.
const getUserInfo = async(token) => {
  if(!token) return;
  try{
    const response = await fetch(
      "https://www.googleleapis.com/userinfo/v2/me",
      {
        headers: {Authorization: 'Bearer ${token}'},

      }
    );
    const user = await response.json();
    await AsyncStorage.setItem("@user", JSON.stringify(user));
    setUserInfo(user);
  }
  catch(error){
    
  }
}


// code used from video 


  return (
    <View style={styles.container}>
      <Text>Sisi's google test app!</Text>

      {/* 3. */}
      <Button title = "Sign in with Google" onPress={promptAsync}/>

      {/* 4. -- Test running web and such. By this stage, it is not handling any requests*/}
      
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
