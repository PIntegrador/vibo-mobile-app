import React from 'react'
import {observable} from 'mobx'
import {observer} from "mobx-react";
import {Platform,ScrollView, TextInput, StyleSheet,keyboardVerticalOffset,KeyboardAvoidingView ,StatusBar, View} from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import {chatStore} from '../store/ChatStore'
import {authStore} from '../store/AuthStore'
import { OwnMessage } from '../components/OwnMessage';
import { Message } from '../components/Message';
import { ProjectHeader } from '../components/ProjectHeader';
import { ChatHeader } from '../components/ChatHeader';
import { Header } from '../components/Header';


@observer export default class Chat extends React.Component  {
   
    @observable message = '';
    @observable uid = ''
    constructor(props){
        super(props);
        this.onSend = this.onSend.bind(this);
        this.message = ''
        this.uid = authStore.user.uid;
    }
    onSend() {
        if(this.message != ''){
            chatStore.sendMessage(this.message,this.uid );
            this.clearText();
        }
    }

    messages() {
        
        return  this.props.messageListOrdered.map(elemento => {
            if(elemento.user == this.uid) {
                return <OwnMessage id = {elemento.id} messageText = {elemento.messageText}/>
             } else {
              return   <Message id = {elemento.id} messageText = {elemento.messageText} user = {authStore.user.email}/>
             }
            }
        )
    }
   
    clearText () {
        this.message = '';
        this._textInput.setNativeProps({text: this.message});
      }
    render() {
        return ( 
        <View style = {styles.container} > 
          <StatusBar
          backgroundColor="#310432"
          barStyle="light-content"
        />
            <Header/>
            <ProjectHeader />
           <ChatHeader />
           <ScrollView style= {styles.scrollCont} >
            <View style= {styles.chatContent}>
            {this.messages()}
            </View>
            </ScrollView>
            <View style= {styles.writeMessage} >
            <TextInput style= {styles.input}
                     ref={component => this._textInput = component}
                  onChangeText={v => (this.message = v)}
                  value={this.message}
                  placeholder="Escribe un mensaje..."
                  multiline
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
    scrollCont : {
        maxWidth: '100%',
    },
    chatContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width:'100%',
        backgroundColor:'#FBFBFB',
        padding:10,
        marginBottom:10
    },
    writeMessage: {
        position: 'relative',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        minHeight:60,
        maxHeight:100,
        width:'100%',
        backgroundColor:'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 18,
        elevation: 7,  
    },
    input:{
        
       
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