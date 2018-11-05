import React, {Component } from 'react';
import {observer} from "mobx-react";
import {Platform,StyleSheet,Text, View} from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import {homeStore} from '../store/HomeStore'
import { authStore } from '../store/AuthStore';


@observer export default class Home extends Component  {

    constructor(props){
        super(props);
        this.onSend = this.onSend.bind(this);
    }

    onSend() {
        authStore.signOut();
    }
    render() {
        return ( 
            <View style = {styles.container} > 
            <Text style = {styles.welcome} >Hello!</Text> 
            <Text style = {styles.welcome} > {
                authStore.user.email}
            </Text>

            <Button buttonStyle={styles.button}
            title="cerrar sesion" large 
            onPress={this.onSend} />
            </View> );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBFBFB'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    button: {
        backgroundColor: '#310432',
        width: 300,
        marginTop: 20,
    }
});