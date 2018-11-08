import * as React from 'react';
import { Platform,ScrollView, TextInput, StyleSheet,Text,TouchableOpacity, View, Image, ToastAndroid, StatusBar, Vibration } from 'react-native';
import { authStore } from '../store/AuthStore';
import { homeStore } from '../store/HomeStore';
import { observer } from 'mobx-react';

console.ignoredYellowBox = true;
export const AddProjects = observer((props) => {
    return (
        <View style={styles.projectsComponent}>
            
        </View>
    )
});
  
const styles = StyleSheet.create({
    projectsComponent: {
        width: "100%",
    },
});