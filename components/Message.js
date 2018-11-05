import * as React from 'react';
import {Platform,ScrollView, TextInput, StyleSheet,Text,TouchableHighlight, View} from 'react-native';

export const Message = (props) => {
    return (
        <TouchableHighlight key={props.key} style={styles.messageCont}>
                    <Text style={styles.message} >{props.messageText}</Text>
                </TouchableHighlight>
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