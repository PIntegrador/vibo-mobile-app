import * as React from 'react';
import { Platform,ScrollView, TextInput, StyleSheet,Text,TouchableOpacity, View, Image, ToastAndroid, StatusBar, Vibration } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';

import { authStore } from '../store/AuthStore';
import { homeStore } from '../store/HomeStore';
import { mainStore } from '../store/MainStore';

export const FloatingButton = (props) => {
    function Menu(props) {
        if (mainStore.where === "home") {
            return (
                <ActionButton buttonColor="#10E6C5" spacing={15}>
                    <ActionButton.Item
                        size={45}
                        buttonColor='#551159'
                        title="Subir Archivo"
                        onPress={() => {
                            ToastAndroid.show("Archivo", ToastAndroid.SHORT);
                        }}>
                        <Icon color="white" name="folder-plus" type="feather" />
                    </ActionButton.Item>
                    <ActionButton.Item
                        size={45}
                        buttonColor='#FDC741'
                        title="Nueva Carpeta"
                        onPress={() => {
                            ToastAndroid.show("Carpeta", ToastAndroid.SHORT)
                        }}>
                        <Icon color="white" name="folder-plus" type="feather" />
                    </ActionButton.Item>
                    {
                        <ActionButton.Item
                        size={45}
                        buttonColor='#F66880'
                        title="Nuevo Proyecto"
                        onPress={() => {
                            let guests = [];
                            ToastAndroid.show("Proyecto", ToastAndroid.SHORT);
                            homeStore.prueba(authStore.user.uid, guests + "");
                        }}>
                        <Icon color="white" name="project" type="Octicons" />
                    </ActionButton.Item>
                    }
                    
                </ActionButton>
                )
        }
        return (
            <ActionButton buttonColor="#10E6C5" spacing={15}>
                <ActionButton.Item
                    size={45}
                    buttonColor='#551159'
                    title="Subir Archivo"
                    onPress={() => {
                        ToastAndroid.show("Archivo", ToastAndroid.SHORT);
                    }}>
                    <Icon color="white" name="folder-plus" type="feather" />
                </ActionButton.Item>
                <ActionButton.Item
                    size={45}
                    buttonColor='#FDC741'
                    title="Nueva Carpeta"
                    onPress={() => {
                        ToastAndroid.show("Carpeta", ToastAndroid.SHORT)
                    }}>
                    <Icon color="white" name="folder-plus" type="feather" />
                </ActionButton.Item>
            </ActionButton>
            )
      }
    return (
        <Menu/>
        )
    }


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