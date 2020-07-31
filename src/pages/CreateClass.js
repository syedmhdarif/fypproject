import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class CreateClass extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.classtext}>
                <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="email"
                
                 />

            <TextInput style={styles.inputBox} 
                placeholderTextColor="#595959"              
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="password" 
                
                
                />
            </View></ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    inputBox :{
        width :300,
        borderColor:'#595959',
        borderWidth:2,
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#ffffff',
        marginVertical:10,
    },
    classtext:{
        justifyContent: 'center',
        alignItems: 'center',
    },
})