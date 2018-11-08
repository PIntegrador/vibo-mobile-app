import * as React from 'react';
import { Platform,ScrollView, TextInput, StyleSheet,Text,TouchableOpacity, View, Image, ToastAndroid, StatusBar, Vibration } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';
import { authStore } from '../store/AuthStore';
import { homeStore } from '../store/HomeStore';

export const FloatingButton = (props) => {
    onPress = () => {
        ToastAndroid.show("Agregados", ToastAndroid.SHORT);
        //Vibration.vibrate(1000);
        let guests = ["otros", "usuarios", "que invite"];
        
        homeStore.prueba(authStore.user.uid, guests+"");
    }
    return (
        <ActionButton buttonColor="#10E6C5" spacing={15}>
            <ActionButton.Item size = {45} buttonColor='#551159' title="Subir Archivo" onPress={()=> ToastAndroid.show("Archivo", ToastAndroid.SHORT)}>
                <Icon color="white" name="folder-plus" type="feather"/>
            </ActionButton.Item>
            <ActionButton.Item size = {45} buttonColor='#FDC741' title="Nueva Carpeta" onPress={()=> {ToastAndroid.show("Carpeta", ToastAndroid.SHORT)}}>
                <Icon color="white" name="folder-plus" type="feather"/>
            </ActionButton.Item>
            <ActionButton.Item size = {45} buttonColor='#F66880' title="Nuevo Proyecto" onPress={()=> {ToastAndroid.show("Proyecto", ToastAndroid.SHORT);}}>
                <Icon color="white" name="project" type="Octicons"/>
            </ActionButton.Item>
        </ActionButton>
        )
    }
           {/* <TouchableOpacity
            activeOpacity={0.7}
            style={styles.floatingButton}
            onPress={this.onPress}>
                <Image
                    source={require('../data/images/floatingButton.png')}
                />
            </TouchableOpacity> */}


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        fontWeight: "bold",
        height: 30,
        color: 'white',
      },
    floatingButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    button: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 2,
    }
});