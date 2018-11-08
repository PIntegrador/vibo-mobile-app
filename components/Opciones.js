import * as React from 'react';
import { Platform,ScrollView, TextInput, StyleSheet,Text,TouchableOpacity, View, Image, ToastAndroid, StatusBar, Vibration } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';

import { authStore } from '../store/AuthStore';
import { homeStore } from '../store/HomeStore';
import { mainStore } from '../store/MainStore';

export const Opciones = (props) => {
    return (
        <View
        style={styles.floatingButton}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.config}>
                <Text style={styles.textConfig}>Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.logOut}
                onPress={() => {
                    mainStore.settings = !mainStore.settings
                    authStore.signOut();
                }}>
                <Text style={styles.textLogOut}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
        )
    }


const styles = StyleSheet.create({
    floatingButton: {
        position: "absolute",
        top: 20,
        right: 15,
        backgroundColor: "white",
        paddingVertical: 3,
        elevation: 5
    },
    config: {
        backgroundColor: "white",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#dddddd",
        marginBottom: -1  
    },
    logOut: {
        backgroundColor: "white",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#dddddd",  
    },
    textConfig:{
        fontSize: 16,
        color: "#ddd"
    },
    textLogOut:{
        fontSize: 16,
        color: "#6a6a6a"
    }
});