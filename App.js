import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Keyboard } from 'react-native';
import {Touchable} from "react-native-web";
const entireScreenHeight = Dimensions.get('window').height;
const rem = entireScreenHeight / 380;
export default function App() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
    <View style={styles.container}>
      <View style={{ flex: 0.5}}>
          <Text> upper page test </Text>
      </View>

      <View style={{flex: 2.5, width: '60%', alignItems:'center'}}>
          <Image source={require('./assets/icon.png')}style={styles.image}resizeMode="contain"></Image>
      </View>
      <View style={{flex: 0.75, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Text style={{ fontSize: 20 * rem, color: '#3a5889', fontWeight: 'bold'}}> Welcome.</Text>
      </View>
      <View style={{ flex: 2.25, width: '90%'}}>
          <View style={{ width: '100%', height: '80%' }}>
              <View style={styles.textborder}>
                  <TextInput
                      style={styles.textinput}
                      autoCapitalize='none'
                      placeholder={"Username"}
                      keyboardType={'ascii-capable'}
                      onChangeText={(value) => setUsername(value)}
                      value={username}
                  />
              </View>
              <View style={{width: '100%', flex: 0.4}}> </View>
              <View style={styles.textborder}>
                  <TextInput
                      style={styles.textinput}
                      autoCapitalize='none'
                      autoCompleteType='off'
                      placeholder="Password"
                      onChangeText={(value) => setPassword(value)}
                      value={password}
                      secureTextEntry={true}
                  />
              </View>
          </View>

        <TouchableOpacity style={{ marginTop: 2 * rem, alignSelf: 'flex-end'}}>
            <Text style={styles.link}> Forgot your password? </Text>
        </TouchableOpacity>
      </View>
        <View style ={{flex: 1.75, width: '75%', justifyContent: 'flex-start', alignItems: 'center'}}>
            <View style={{ flex: 1, marginTop: '4%', width: '100%', alignItems: 'center'}}
                <TouchableOpacity style={styles.loginbutton} onPress={() => login()}>
                    <Text style={{ color: 'white', fontSize: 25 * rem}}> Login</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.label}> Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.link}> Sign up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create{{
    container: {
        width: Dimensions.get('window').width,
            height : Dimensions.get('window').height,
            alignItems: 'center',
    },
    image: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        marginTop: rem*10,
    },
    textborder: {
        width: '100%',
        flex: 1.5,
        borderColor: '#3C5984'
    },
    label: {
        color: 'black',
        fontSize: 8 * rem,
    },
    link: {
        fontWeight: 'bold',
        color: '#999999',
        fontSize: 8 * rem,
    },
    loginbutton: {
        height: '40%',
        width: '80%',
        borderRadius: 20,
        backgroundColor: '#3a5889',
        justifyContent: 'center',
        alignItems: 'center'
    }
}};

