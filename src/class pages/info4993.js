import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chapter from './chapter';
import Student from './student';
import Record from './record';

const Tab = createBottomTabNavigator();

const info4993=()=> {
    return (
      
        <Tab.Navigator initialRouteName='Chapter'
            
            tabBarOptions={{
            activeTintColor: '#ffffff',
            labelStyle: {  fontWeight: 'bold' },          
            style: { backgroundColor: '#455a64' },
          }}>
            <Tab.Screen name="Chapter" component={Chapter}                
              options={{
              tabBarLabel: 'Chapter',
              tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="home" color={color} size={20} />
                ),}}     
            />
            <Tab.Screen name="Student" component={Student} 
                options={{
              tabBarLabel: 'Student',
              tabBarIcon: ({ color, size }) => (
             <Icon name="newspaper" color={color} size={20} />),}}
            />
            <Tab.Screen name="Record" component={Record} 
                options={{
              tabBarLabel: 'Record',
              tabBarIcon: ({ color, size }) => (
             <Icon name="add-circle" color={color} size={20} />),}}
            />
        </Tab.Navigator>
        
    )
}
export default info4993;