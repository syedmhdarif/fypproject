import React, { Component } from 'react';
import { TextInput, TouchableOpacity,View,Text, StyleSheet, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Reload ({navigation}){

    return (
        <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          />

        <TextInput style={styles.inputBox} 
                    placeholderTextColor="#595959"            
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType = 'numeric'
                    placeholder="Enter your preferred amount"
                    color='black'
                    />
        
        <Text style={{marginLeft:40, fontWeight:"bold"}}> Min reload amount is RM10</Text>

        <TouchableOpacity  onPress={() => navigation.navigate('Reload1')}>
                    <Text style={styles.textedit}>
                        Reload Ewallet
                    </Text>
                </TouchableOpacity>






                    </View>

      )
  

  
}

export default Reload;



const styles = StyleSheet.create({
    inputBox :{
        width :wp('80%'),
       borderWidth:0.8,
        alignSelf:"center",
        paddingHorizontal: 10,
        fontSize: 18,
        color: '#ffffff',
        marginVertical:8,
    },
    classtext:{
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    textedit:{ 
        borderColor:'#595959',
        textAlign:"center",
        borderWidth:1,
        borderRadius:20,
        backgroundColor:"silver",
        width:wp('40%'),
        alignSelf:"center",
        paddingHorizontal:10,
        paddingVertical:5,
        marginVertical:15,
        marginHorizontal:15, 
        fontWeight:'900',
        color:'#595959', fontSize:20
    
      },
})