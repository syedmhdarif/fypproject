import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { FAB } from 'react-native-paper';

export default class info4993 extends Component{
    render(){
        return(
            <View>
            
                <Text>
                
                    HAIIII
                </Text>
                <FAB
                    style={styles.fab}
                    
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })