import React, {Component } from 'react';
import {observable} from 'mobx'
import {observer} from "mobx-react";
import {Platform,ScrollView, TextInput, StyleSheet,Text,TouchableHighlight, View} from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import {chatStore} from '../store/ChatStore'
import {authStore} from '../store/AuthStore'
import { OwnMessage } from '../components/OwnMessage';


@observer export default class Chat extends Component  {
   
    @observable message = '';

    constructor(props){
        super(props);
        this.onSend = this.onSend.bind(this);
        this.message = ''
    }

    onSend() {
        if(this.message != ''){
            chatStore.sendMessage(this.message, authStore.user);
            this.clearText();
        }
       
    }

    clearText () {
        this.message = '';
        this._textInput.setNativeProps({text: this.message});
      }
    render() {
        return ( 
        <View style = {styles.container} > 
            <View style= {styles.chatHeader} >
                <Text style = {styles.titleText}>Chat Grupal</Text> 
            </View>
            <ScrollView style= {styles.scrollCont} >
            <View style= {styles.chatContent}>
            {chatStore.messageList.map(elemento => 
                <OwnMessage id = {elemento.id} messageText = {elemento.messageText}
                />
               )}
            </View>
            
            </ScrollView>
            <View style= {styles.writeMessage} >
                <TextInput style= {styles.input}
                     ref={component => this._textInput = component}
                  onChangeText={v => (this.message = v)}
                  value={this.message}
                  placeholder="Escribe un mensaje..."
                  />
                <Button buttonStyle={styles.button}
                title="Enviar" 
                onPress={this.onSend}/>
            </View>
           
        </View> );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding:0
    },
    message:{

    },
    chatHeader: {
        height:40,
        textAlign: 'center',
        width:'100%',
        flexDirection: 'row',
        backgroundColor:'#F9F9F9',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
 
    },
    titleText: {
        fontSize:18,
        fontWeight: 'bold',
        color: '#310432',

    },
    scrollCont: {
        width:'100%',
        backgroundColor:'#FBFBFB',
        padding:15,
    },
    chatContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width:'100%',
    },
    writeMessage: {
        flexDirection: 'row',
        height:60,
        width:'100%',
        backgroundColor:'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 18,
        elevation: 7
    },
    input:{
        height:40,
        width: '70%',
        backgroundColor:'white',
        paddingLeft: 5,
        fontSize:18,

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