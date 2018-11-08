import React, {Component } from 'react';
import {observer} from "mobx-react";
import { Platform,StyleSheet,Text, View,TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import {homeStore} from '../store/HomeStore'
import { authStore } from '../store/AuthStore';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';
import { Folders } from '../components/Folders';
import { Files } from '../components/Files';
import { FloatingButton } from '../components/FloatingButton';
import { Opciones } from '../components/Opciones';
import { observable } from 'mobx';
import { mainStore } from '../store/MainStore';
console.disableYellowBox = true;

@observer export default class Home extends Component  {
    constructor(props){
        super(props);
        this.onSend = this.onSend.bind(this);
    }

    onSend() {
        authStore.signOut();
    }
    render() {
        if (!mainStore.settings) {
            return ( 
                <View style = {styles.container} > 
                    <StatusBar 
                        backgroundColor="#240326"
                        barStyle="light-content"
                    />
                    <Header/>
                    <ScrollView style={styles.scroll}>
                        <Projects />
                        <Folders />
                        <Files />
                    </ScrollView>
                    <FloatingButton/>      
                </View> 
            );
        } else {
            return ( 
                <TouchableOpacity  
                    activeOpacity = {1}
                    style = {styles.container}
                    onPress={() => mainStore.settings = false}> 
                    <StatusBar 
                        backgroundColor="#240326"
                        barStyle="light-content"
                    />
                    <Header/>
                    <ScrollView style={styles.scroll}>
                        <Projects />
                        <Folders />
                        <Files />
                    </ScrollView>
                    <FloatingButton/>
                    <Opciones/>
                </TouchableOpacity > 
            );
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBFBFB'
    },
    scroll: {
        width: "100%",
        height: "50%",
        padding: 20,
        paddingBottom: 0,
        paddingTop: 25,
    },
    button: {
        backgroundColor: '#310432',
        width: 300,
        marginTop: 20,
    }
});