import * as React from 'react';
import {Platform,ScrollView, TextInput, StyleSheet,Text,TouchableHighlight, View} from 'react-native';

export const Header = (props) => {
    return (
        <View>
            
        </View>
    )
}
  
const styles = StyleSheet.create({
    messageCont: {        
        width: '50%',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 6,
        marginBottom: 5,
        alignSelf: 'flex-start'
    },
    message: {
        color: 'white',
        fontSize:18,
        textAlign: 'right',
    }
});