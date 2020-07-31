import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import MyClass from './MyClass';
import CreateClass from './CreateClass';
import JoinClass from './JoinClass';

const Tab = createBottomTabNavigator();

const IAttend=()=> {
    return (
        <Tab.Navigator initialRouteName='MyClass'
            tabBarOptions={{
            activeTintColor: '#ffffff',
            labelStyle: {  fontWeight: 'bold' },          
            style: { backgroundColor: '#455a64' }, 
          }}>
            <Tab.Screen name="MyClass" component={MyClass}                
              options={{
              tabBarLabel: 'MyClass',
              tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="home" color={color} size={20} />
                ),}}     
            />
            <Tab.Screen name="Create Class" component={CreateClass} 
                options={{
              tabBarLabel: 'Create Class',
              tabBarIcon: ({ color, size }) => (
             <Icon name="newspaper" color={color} size={20} />),}}
            />
            <Tab.Screen name="Join Class" component={JoinClass} 
                options={{
              tabBarLabel: 'Join Class',
              tabBarIcon: ({ color, size }) => (
             <Icon name="add-circle" color={color} size={20} />),}}
            />
        </Tab.Navigator>
        
    )
}
export default IAttend;