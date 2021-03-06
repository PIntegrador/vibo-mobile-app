import React from 'react';
import {Platform,ScrollView, TextInput, StyleSheet,Image,TouchableOpacity, View, ToolbarAndroid, showS} from 'react-native';
import { mainStore } from '../store/MainStore';

export const Header = (props) => {
    return (
        <View style={styles.cont}>
            <View style={styles.left}>
                <TouchableOpacity >
                    <Image style={styles.logo}
                        source={require('../data/images/logoBlanco.png')}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.right}>
                <TouchableOpacity style={styles.notZone}>

                    <Image style={styles.notifications}
                        source={require('../data/images/notification.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => mainStore.settings = !mainStore.settings}
                style={styles.optZone}>

                    <Image style={styles.options}
                        source={require('../data/images/options.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>  
    )
}

  
const styles = StyleSheet.create({
    cont: {
        height:64,
        backgroundColor: '#310432',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:15
    },
    left: {
        justifyContent: 'flex-start',
    },
    logo: {        
     height:31,
     width: 71
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    notifications: {        
     height:30,
     width: 30,
     marginRight:15
    },
    options: {        
     height:31,
     width: 20,
     marginRight:10

    }
});