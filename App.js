import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules } from 'react-native';

var RNKommunicateChat = NativeModules.RNKommunicateChat;


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello I'm Kommunicate</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}
let conversationObject = {
  'appId' : '235a50e532fbb955ed479287ca9842961r' // The [APP_ID](https://dashboard.kommunicate.io/settings/install) obtained from kommunicate dashboard.
}

RNKommunicateChat.buildConversation(conversationObject, (response, responseMessage) => {
     if(response == "Success") {
         console.log("Conversation Successfully with id:" + responseMessage);
     }
   });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
