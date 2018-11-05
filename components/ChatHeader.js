import React from 'react';
import {StyleSheet,Text,Image, View, TouchableHighlight} from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import {authStore} from '../store/AuthStore'

export const ChatHeader = (props) => {
   
    return (
        <View style= {styles.chatHeader} >
        <Image style = {styles.backIcon}
          source = {require('../data/images/backIcon.png')}
        />
        <Text  style = {styles.atras}>atrás</Text>
                <Text style = {styles.titleText}>Chat Grupal</Text> 
                <Button buttonStyle={styles.button}
            title="cerrar sesion" 
            onPressOut={(event)=>{
                event.preventDefault();
               authStore.signOut();
              }}/>
            </View>
    )
}
  
const styles = StyleSheet.create({
   
    chatHeader: {
        height:40,
        textAlign: 'center',
        width:'100%',
        flexDirection: 'row',
        backgroundColor:'#F9F9F9',
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 1,
        padding: 15
 
    },
    backIcon: {
        height:12   ,
        width:12
    },
    titleText: {
        fontSize:18,
        fontWeight: 'bold',
        color: '#310432',
        alignSelf:'center'
    },
    
    atras: {
        fontSize:18,
        fontWeight: 'bold',
        color: '#979797',
        marginLeft: 10
    },
    button: {
        backgroundColor: '#310432',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight:18,
        borderRadius: 6,
    }
});