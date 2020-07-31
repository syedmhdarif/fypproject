import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class MyClass extends Component{
    render(){
        return(
            <ScrollView>
            <View style={styles.classtext}>
            <View style={{marginBottom:10, marginTop:10,}}>
                <Text style={{fontWeight:'bold', fontSize:30, color:'#595959'}}>My Class</Text>
            </View>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                
            </View></ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    textedit:{ 
        borderWidth:1,
        borderRadius:8,
        padding:20,
        marginVertical:5,   
        fontWeight:'bold',
        color:'#595959', fontSize:20
    
      },
});