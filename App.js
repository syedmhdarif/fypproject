/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IDcard from './src/pages/ID Card';
import IDcard2 from './src/pages/ID card2';
import Login from './src/pages/Login.js';
import Form from './src/pages/Form';
import IAttend from './src/pages/IAttend';
import Ewallet from './src/pages/Ewallet';
import LoginPage from './src/pages/LoginPage';
import Loading from './src/pages/Loading';
import MyClass from './src/pages/MyClass';
import CreateClass from './src/pages/CreateClass';
import JoinClass from './src/pages/JoinClass';
import info4993 from './src/class pages/info4993';

const Stack = createStackNavigator();

function App() {
  return (
    
   
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="LoginPage" headerMode="none" >
      <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen  name="Login" component={Login}  />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen  name="ID Card" component={IDcard} />
        <Stack.Screen  name="IDcard2" component={IDcard2} />
        <Stack.Screen name="IAttend" component={IAttend} />
        <Stack.Screen name="Ewallet" component={Ewallet} />
        <Stack.Screen name="MyClass" component={MyClass} />
        <Stack.Screen name="CreateClass" component={CreateClass} />
        <Stack.Screen name="JoinClass" component={JoinClass} />
        <Stack.Screen name="info4993" component={info4993} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default App;

const styles = StyleSheet.create({
  container : {
    backgroundColor :'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  headercontent:{
    justifyContent:'center',

  }


  
});
