import * as React from 'react';
import {Platform,ScrollView, TextInput, StyleSheet,Text,TouchableHighlight, View} from 'react-native';

export const Message = (props) => {
    colorArray = [ '#FDC741', '#10E6C5', '#F66880', '#310432']
    
    userColor = colorArray[Math.floor(Math.random()*colorArray.length)];

    return (
        <View style={styles.messageCont}>
            <TouchableHighlight key={props.key}>
            <Text style={styles.userText} style={{ color: userColor,}}>{props.user}</Text>
            </TouchableHighlight>
            <TouchableHighlight key={props.key} >
            <Text style={styles.message} >{props.messageText}</Text>
            </TouchableHighlight>
        </View>
       
    )
}
  
const styles = StyleSheet.create({
    messageCont: {        
        flex: -1,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 6,
        marginBottom: 5,
        alignSelf: 'flex-start',
        elevation:2,
        maxWidth: '90%'
    },
    userText: {
        fontWeight: 'bold',
        fontSize:20,
        textAlign: 'left',
    },
    message: {
        color: 'black',
        fontSize:18,
        textAlign: 'left',
       
    }
});