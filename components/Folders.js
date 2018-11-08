import * as React from 'react';
import { Platform,ScrollView, TextInput, StyleSheet,Text,TouchableOpacity, View, Image, ToastAndroid, StatusBar } from 'react-native';
import { authStore } from '../store/AuthStore';
import { homeStore } from '../store/HomeStore';

console.ignoredYellowBox = true;
export const Folders = (props) => {
    return (
        <View style={styles.foldersComponent}>
            <View style={styles.titleView}>
                <Image
                    style={styles.titleImage}
                    source = {require('../data/images/foldersIcon.png')}
                />
                <Text style={styles.titleText}>Carpetas</Text>
            </View>
            <View style={styles.foldersCont}>
                {homeStore.folders.map(elemento => 
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.folder}>
                        <Image 
                            style={styles.image}
                            source = {require('../data/images/folderBg.png')}
                        />
                        <Text style={styles.folderTitle}>Nombre de la Carpeta</Text>
                </TouchableOpacity>)}
            </View>
            <View style={styles.separador}>        
            </View>
        </View>
    )
}
  
const styles = StyleSheet.create({
    foldersComponent: {
        width: "100%",
    },
    titleView: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    titleImage: {
        flex: 0,   
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: "bold",
        color: "#aaa",
        marginLeft: 10,
    },
    foldersCont: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "flex-start",
        justifyContent: "space-between",
    },
    folder: {
        height: 120,
        width: "30%",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#DDDDDD",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    folderImage:{

    },
    folderTitle: {
        color: "#afafaf",
        textAlign: "center",
        marginTop: 10
    },
    separador: {
        marginBottom: 20,
        backgroundColor: "#dddddd",
        width: "100%",
        height: 1
    }
});