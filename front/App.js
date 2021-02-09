import {WebView} from 'react-native-webview';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Text>Video</Text>
     <View style={{borderColor: 'red', borderWidth:1, width:200, height:200}} >
       
       <WebView
          style={{flex:1}}
          javaScriptEnabled={true}
          source={{uri: '76.109.11.95:8899/stream.mjpg'}}
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
