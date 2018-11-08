import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import { authStore } from '../store/AuthStore'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import ToDoList from './ToDoList';
import Chat from './Chat';
import { mainStore } from '../store/MainStore';
import {chatStore} from '../store/ChatStore'
import Project from './Project';
import { Opciones } from '../components/Opciones';


@observer export default class App extends Component {
    render() {
        if(authStore.user) {

            if(mainStore.where === "home"){
                return (<Home/>)
            } else if(mainStore.where === "project"){
                return (<Project/>)
            }
            //return ( <Chat messageListOrdered= {chatStore.messageListOrdered}/> );

        }

        if(mainStore.screen === "login" && !authStore.user){
            return ( <Login/> );
        }
        
        if(mainStore.screen === "signup" && !authStore.user){
            return ( <SignUp/>  );
        }

        /*
         <Chat messageListOrdered= {chatStore.messageListOrdered} project = "Fk3xZh2iBjOuwhYkifd0"/>
        */
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    button: {
        backgroundColor: 'violet',
        marginTop: 20,
    }
});