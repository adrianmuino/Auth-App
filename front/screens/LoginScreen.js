import React, { Component } from 'react'
import { ImageBackground, Image, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import base64 from 'react-native-base64'

class LoginScreen extends Component {
    state = {
       username: '',
       password: ''
    }

    handleUsername = (text) => {
       this.setState({ username: text })
    }
    handlePassword = (text) => {
       this.setState({ password: text })
    }
    login = (user, pass) => {
       alert('username: ' + user + ' password: ' + pass)
    }
    render() {
       return (
            <ImageBackground 
                source={require("../assets/background.jpg")}
                style={styles.container}
            >
                <View style={styles.logoContainer}> 
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Text style={styles.text}>Home Security and Automation Sytem</Text>
                </View>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Username"
                    placeholderTextColor = "grey"
                    autoCapitalize = "none"
                    onChangeText = {this.handleUsername}/>
                
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "grey"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}/>
                
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={() => {
                        this.props.navigation.navigate('VideoFeed', {
                          key: base64.encode(this.state.username + ":" + this.state.password)
                        });
                      }}
                >
                    <Text style = {styles.submitButtonText}> Log In </Text>
                </TouchableOpacity>
            </ImageBackground>
       )
    }
 }
 export default LoginScreen
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        alignContent: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
       borderColor: 'white',
       borderWidth: 1,
    },
    logo: {
        width: 70,
        height: 70,
    },
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center",
    },
    submitButton: {
        width: '100%',
        height: 100,
        backgroundColor: '#fc5c65',
        alignItems: "center",
    },
    submitButtonText:{
       color: 'white',
       fontSize: 30, 
        position: "absolute",
        top: 30,
    },
    text: { 
        fontSize: 15, 
    },
 })