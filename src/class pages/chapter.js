import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import Alertbutton2 from '../class pages/alertbutton2';
import MyBackButton from './backbutton';

export default class Chapter extends Component{
    
    componentDidMount() {
        loc(this);
      }
      
      componentWillUnMount() {
        rol();
      }
    render(){
        return(
            <ScrollView>
            
            <View style={styles.classtext}>

            <Text style=
                {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666'}}>
                    Chapter
            </Text>
            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('Ewallet')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 8                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 38/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('Ewallet')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 7                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 40/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('Ewallet')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 6                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 36/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('Ewallet')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 5                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 36/40 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.textedit}
            onPress={() => this.props.navigation.navigate('Ewallet')} title="info4993" >
                <Text style={{fontWeight:'900', color:'#595959', fontSize:20, marginLeft:8}} >
                    Chapter 4                   
                </Text>

                <Text style={{fontSize:15, paddingTop:4, marginLeft:170, color:'#595959' }}> 
                    student: 40/40 
                </Text>
            </TouchableOpacity>
            
            </View></ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        height:hp('100%'),
        backgroundColor:'#ffffff',
        alignItems: 'center',
    },
    textedit:{ 
        flexDirection:'row',
        borderBottomWidth:0.4,
        width:wp('90%'),
        marginVertical:5,   
        paddingVertical:15,
        
    
      },
});