import React, {Component } from 'react';
import {observer} from "mobx-react";
import {Platform,StyleSheet,Text, View} from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import { Login } from './Login';
import Home from './Home';
import { stores } from '../stores/index';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
        'u'
});

global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

@observer export default class App extends Component  {

    render() {

        if(stores.auth.user) {
            return ( <Home /> );
        }
        return ( <Login /> );
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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});