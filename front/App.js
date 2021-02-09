import {WebView} from 'react-native-webview';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={{fontSize: 30, fontStyle: "italic", fontFamily: "Arial"}}>Camera 1</Text>
     <View style={{borderColor: 'black', borderWidth:1, width:320, height:240}} >
       
       <WebView
          style={{flex:1}}
          javaScriptEnabled={true}
          source={{uri: 'http://76.109.11.95:8899/stream.mjpg'}}
          />
          
     </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
  },
});
