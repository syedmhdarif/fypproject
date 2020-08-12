import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView, color, ImageBackground  } from "react-native";
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

function IDcard2({navigation}) {
  
    return (
      <View style={{flex:1,}}>
        <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
        <Icon name="home" color={'#ffffff'} size={20} />
          <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
        </TouchableOpacity>
      <ScrollView>
      
      <View style={styles.container}>
      <View style={
        {backgroundColor:'#f2f2f2', marginTop:210,width:wp('100%'), 
        height:hp('100%'), elevation: 3, position:'absolute',
        borderTopLeftRadius:90}}></View>

                <Image                 
                  style={{ 
                    borderRadius:40,width:wp('20%'), height:hp('13%'), alignSelf:'center',
                     elevation:6, marginTop:10, 
                    }}
                  source={require('../images/syed.jpg')}/>

        <View style={styles.profileview}>
            <Text style={{color:'#ffffff', alignSelf:'center', marginTop:20}}>
            SYED MOHAMAD ARIF BIN SAYED MOHD ALI 
            </Text>
            <Text style={{color:'#ffffff', alignSelf:'center'}}>
            KULLIYYAH OF INFOTMATION TECHNOLOGY
            </Text>
            <Text style={{color:'#ffffff', alignSelf:'center'}}>
            BIT
            </Text>
            <Text style={{color:'#ffffff',  alignSelf:'center'}}>
            Syedarifjr@gmail.com
            </Text>
         
        </View>

        <View style={{alignItems:'center', marginTop:100}}>
          <ImageBackground 
          style={styles.matric} 
          source={require('../images/matriccard.png')}>
            <Image                 
                style={{ borderRadius:20, marginTop:102,width:wp('36%'), height:hp('23%')}}
                source={require('../images/syed.jpg')}/>
            <View style={styles.textview}>
            <Text style={styles.textedit}>SYED ARIF</Text>
            <Text style={styles.textedit}>1718247</Text>
            <Text style={styles.textedit}>KICT</Text></View>

            <Image                 
                style={{borderRadius:8, marginTop:20,width:100, height:100}}
                source={require('../images/QR.png')}/>
                <Text style={styles.textedit2}>17.07.2020  03.29pm</Text>
         
                <TouchableOpacity style={{marginVertical:20}} onPress={()=> auth().signOut()} >
                     <Text style={{color:'black'}} >Logout</Text>
               </TouchableOpacity></ImageBackground>
               </View>
        </View>
        
      
      </ScrollView>
      </View>
    );
  
}
export default IDcard2;

const styles = StyleSheet.create({
  container: {
    
    justifyContent:'flex-start',    
    backgroundColor: '#199591',
    textAlignVertical: 'top',
    
    
    
  },
  matric: {
    width:wp('85%'), 
    height:hp('90%'), 
    elevation:4, 
    alignItems:'center',
    marginBottom:20,
    shadowColor: "black",
    shadowOffset: {
      width: 60,
      height:1,
    },
    shadowOpacity: 20,
    shadowRadius: 40,
    borderWidth:0.3,
    borderRadius:20
    
    
  },
  textedit:{    
    fontWeight:'bold',
    color:'black', fontSize:17

  },
  textedit2:{    
    fontWeight:'bold',
    color:'black', fontSize:14

  },
  textview:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
  },
  profileview:{
    flexDirection:'column',
    alignSelf:'center',
    width:wp('90%'),
    height:hp('20%'),
    position:'absolute',
    backgroundColor:'#76c485',
    
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    marginTop:60, justifyContent:'center', borderTopLeftRadius:40, borderBottomRightRadius:40
  },
  header:{
    flexDirection:'row',
    width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
    alignItems:'center',
    paddingHorizontal:22
  },
});