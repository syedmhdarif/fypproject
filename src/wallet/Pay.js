import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Pay ({navigation}){

    

    
    return(
      <View>
<Text style={{ alignSelf:"center",paddingTop: 40}}>
Scan barcode or QR code
</Text>




<TouchableOpacity  onPress={() => navigation.navigate('Reload1')}>
                    <Text style={styles.textedit}>
                        SCAN FROM GALLERY
                    </Text>
                </TouchableOpacity>
      </View>
    )
  
}

export default Pay;

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    container:{
        flexDirection:'row',

    },
    container2:{
       alignItems:'center',
        borderWidth:1,
        borderRadius:5,
         borderColor:"black",
          height:hp('30%'), width:wp('95%'),
          marginVertical:25,
          
         
          

    },
    textedit:{ 
        borderColor:'#595959',
        textAlign:"center",
        marginTop:300,
        alignSelf:"center",
        borderWidth:1,
        borderRadius:20,
        backgroundColor:"silver",
        width:wp('50%'),
        paddingHorizontal:5,
        paddingVertical:4,
        marginVertical:5,
        marginHorizontal:8, 
        fontWeight:'900',
        color:'#595959', 
        fontSize:18
    
      },
});