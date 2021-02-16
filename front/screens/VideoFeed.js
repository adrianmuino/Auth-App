import { WebView } from 'react-native-webview';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class VideoFeed extends Component {
    render(){
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.camera}>
                    <Text style={styles.text}>Camera 1</Text>
                    <View style={styles.camerabox} >
                    
                        <WebView
                            style={styles.container}    // username: adrian password: muino
                            javaScriptEnabled={true}
                            source={{ uri: 'http://76.109.11.95:8899/stream.mjpg', 
                            headers: { 'Authorization': 'Basic ' + navigation.getParam('key', 'NONE')
                            } }}
                            onHttpError={(syntheticEvent) => {
                                const { nativeEvent } = syntheticEvent;
                                navigation.goBack();
                                console.warn(
                                    'Incorrect username and password! '
                                );
                            }}
                        />
                    </View>
                </View>
                <View style={styles.buttons}>
                {/*<Text style={styles.text}>Buttons Here</Text>*/}
                </View>
            </View>
        );
        }
}

export default VideoFeed

//Rendering functions


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignContent: 'center',
    },
    camera: {
        flex: 1,
        backgroundColor: '#F3F4F3',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
    buttons: {
        flex: 1,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: { 
        fontSize: 30, 
        top: -25,
    },
    camerabox: {
        borderColor: 'black',
        borderWidth: 1,
        width: 416,
        height: 312,
        justifyContent: 'flex-end',
        alignContent: 'center',
    },
  });