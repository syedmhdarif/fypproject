// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   Button,
//   Image,
//   StatusBar, TouchableOpacity
// } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';


// function ProfileInfo({navigation}){
    
//         return(
//             <View style={{flex:1}}>
//                 <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
//             <Icon name="reorder-four-outline" color={'#ffffff'} size={20} />
//                 <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
//             </TouchableOpacity>
            
//             <View style={{marginHorizontal:17, marginVertical:10}}>
//                 <Text style={{fontSize:12, fontWeight:'900',marginTop:5}}>
//                     SYED MOHAMAD ARIF BIN SAYED MOHD
//                 </Text>
//                 <Text style={{fontSize:12, fontWeight:'900',}}>
//                     ALI SAIPUDDIN
//                 </Text>

//                 <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
//                     KULLIYYAH OF INFORMATION TECHNOLOGY
//                 </Text>

//                 <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
//                     BIT
//                 </Text>

//                 <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
//                     Syedarifjr@gmail.com
//                 </Text>
                
//                 <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
//                     4th YEAR
//                 </Text>
//             </View>
//             </View>
//         )
    
// }

// export default ProfileInfo;

// const styles=StyleSheet.create({
//     header:{
//         flexDirection:'row',
//         width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
//         shadowColor: "black",
//         shadowOffset: {
//           width: 5,
//           height: 3,
//         },
//         shadowOpacity: 0.27,
//         shadowRadius: 4.65,
//         elevation: 5,
//         alignItems:'center',
//         paddingHorizontal:22
//       }
// })




import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

import LogoProfile from '../student/LogoProfile';


const ProfileInfo =({navigation}) =>{

  const { colors } = useTheme();
    return(
     
      <View >
      <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
            <Icon name="reorder-four-outline" color={'#ffffff'} size={20} />
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
            </TouchableOpacity>
      <ScrollView>
      <LinearGradient 
      style={{flex: 1,}}
      colors={[ '#008075','#00b3a4', '#00e6d2']}> 
           
           <LogoProfile/>
        
              
      <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.profileview, {
              backgroundColor: '#ffffff'
            }]}
        >                     
      <View >
        <View style={{marginTop:'25%'}}>
            <Text style={{color:'black', alignSelf:'center', fontSize:20}}>
            syedmhdarif
            </Text>
            <Text style={{color:'black', alignSelf:'center'}}>
            Haiii helloo anyeong this is my bio
            </Text>
            
        </View>

            <TouchableOpacity style={styles.logout} onPress={()=> auth().signOut()} >
            <Text style={{color:'white',}} >Logout</Text>
            </TouchableOpacity>
         
            
            <Text style={{textAlign:'center'}}>this is the end</Text>
        </View>
        
        </Animatable.View>
        
        </LinearGradient>
    </ScrollView>
    </View>
   
    )}

const styles = StyleSheet.create({
  container: {
    
    
    
  },

  logout: {
    marginVertical:10,
    
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    height:hp('5%'),
    backgroundColor:'#ff7675',
    width:wp('20%'),
    borderRadius: 10,
    
  },
  backprofile:{
    height:hp('30%'), width:wp('80%'),
    position:'absolute',
    backgroundColor:'white',
    padding:150,
    paddingHorizontal:170,
    marginTop:300,
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  
  },
  backprofile2:{
    alignItems :'center',
    
    padding:200,
    
    marginTop:('20%'),
    elevation:4,
    height:hp('100%'),
  },
  profileview:{
    width:wp('94%'), height:hp('80%'),   
    alignSelf:'center',
    borderTopStartRadius:35,
    borderTopRightRadius:35,
    
    shadowColor: "black",
    shadowOffset: {
      width: 40,
      height:5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    marginTop:('25%'),
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
  }
 

  });
export default ProfileInfo;