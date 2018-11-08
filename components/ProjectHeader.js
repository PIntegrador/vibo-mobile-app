import React from 'react';
import {StyleSheet,Text,Image, View, TouchableHighlight} from 'react-native';

export const ProjectHeader = (props) => {
    return (
        <View style = {styles.container}>
        <View style = {styles.left}>
        <Image style = {styles.icon}
          source = {require('../data/images/projecticon.png')}
        />
            <Text style = {styles.projectTitle}>Nombre del Proyecto</Text>
        </View>
        <View style = {styles.right}> 
            <TouchableHighlight>
                <Image style = {styles.closeIcon}
            source = {require('../data/images/closeIcon.png')}
            />
            </TouchableHighlight>
        </View>
           
           
        </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
        height:51,
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center' ,
        justifyContent: 'space-between',
        backgroundColor:'white',
        paddingLeft: 14,
        elevation:2
    },
    icon: {
        height: 27,
        width: 27,
    },
    closeIcon: {
        height: 24,
        width: 24,
        alignSelf: 'flex-end'
    },
    projectTitle: {        
        color: '#310432',
        fontSize:18,
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 5,
       
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center' ,
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
        marginRight: 15
    }
});