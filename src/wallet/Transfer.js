import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
   View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { ceil } from 'react-native-reanimated';

function Transfer ({navigation}){

    
 
    
    return(
    
          <LinearGradient colors={['#004d37','#00996e', '#4dffcc',]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                TRANSFER
            </Text>
          
      <View>
        {/* <TextInput
          style={{ height: 50, width:300,alignSelf:"center", borderColor: 'gray', borderWidth: 1 }}
          onChangeT
          ext={text => onChangeText(text)}
          /> */}
            <TextInput style={styles.inputBox} 
                    placeholderTextColor="#595959"            
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType = 'numeric'
                    placeholder="Amount"
                    color='white'
                    />

<TextInput style={styles.inputBox} 
                    placeholderTextColor="#595959"            
                    underlineColorAndroid='rgba(0,0,0,0)'
                    keyboardType = 'numeric'
                    placeholder="What is it for?"
                    color='white'
                    />
<TouchableOpacity  onPress={() => navigation.navigate('Reload1')}>
                    <Text style={styles.textedit}>
                       Scan Here
                    </Text>
                </TouchableOpacity>

      </View>
      </LinearGradient>
    )
  
}

export default Transfer;

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
        borderWidth:1,
        alignSelf:"center",
        borderRadius:20,
        backgroundColor:"silver",
        width:wp('26%'),
        paddingHorizontal:5,
        paddingVertical:4,
        marginVertical:5,
        marginHorizontal:8, 
        fontWeight:'900',
        color:'#595959', fontSize:20
    
      },
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
       
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
      inputBox :{
            width :wp('80%'),
           borderWidth:0.8,
            alignSelf:"center",
            paddingHorizontal: 10,
            fontSize: 18,
            color: '#ffffff',
            marginVertical:8,
        }

    
});