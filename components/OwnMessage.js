import * as React from 'react';
import {Platform,ScrollView, TextInput, StyleSheet,Text,TouchableHighlight, View} from 'react-native';

export const OwnMessage = (props) => {
    
    return (
        <TouchableHighlight style={styles.messageCont}>
                    <Text key={props.id} style={styles.message}>{props.messageText}</Text>
                </TouchableHighlight>
    )
    }
    
const styles = StyleSheet.create({
    messageCont: {        
        width: '50%',
        backgroundColor: '#310432',
        padding: 12,
        borderRadius: 6,
        marginBottom: 5,
        alignSelf: 'flex-end'
    },
    message: {
        color: 'white',
        fontSize:18,
        textAlign: 'right',
    }
    
});