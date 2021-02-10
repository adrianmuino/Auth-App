import { WebView } from 'react-native-webview';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VideoFeed() {
    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 30, fontStyle: "italic" }}>Camera 1</Text>
            <View style={{ borderColor: 'black', borderWidth: 1, width: 416, height: 312 }} >

                <WebView
                    style={{ flex: 1 }}    // username: adrian password: muino
                    javaScriptEnabled={true}
                    source={{ uri: 'http://76.109.11.95:8899/stream.mjpg', headers: { 'Authorization': 'Basic YWRyaWFuOm11aW5v' } }} // adrian:muino in base64 encoding
                />

            </View>

        </View>
    );
}



//Rendering functions






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
  });