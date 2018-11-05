import React from 'react'
import {observable} from 'mobx'
import {observer} from "mobx-react";
import {Platform,ScrollView, TextInput, StyleSheet,Text,TouchableHighlight,StatusBar, View} from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import AutogrowInput from 'react-native-autogrow-input';

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
    componentDidMount() {
        chatStore.functi();
    }
    componentWillUnmount() {
        chatStore.nofuncti();
}
    onSend() {
        if(this.message != ''){
            chatStore.sendMessage(this.message,this.uid );
            this.clearText();
        }
    }

    messages() {
        messageList  = this.props.messageList
        .sort(function(a,b) {
            return new Date(a.date) - new Date(b.date); 
        });
        return  messageList.map(elemento => {
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
    scrollCont: {
        width:'100%',
        backgroundColor:'#FBFBFB',
        padding:10,
    },
    chatContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width:'100%',
        padding:2,
        marginBottom:10
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
        elevation: 7,
        
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