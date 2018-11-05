import React from 'react'
import { View, Image, Text,TouchableHighlight, StyleSheet } from 'react-native'
import { Header } from '../components/Header';
import { ProjectHeader } from '../components/ProjectHeader';

export  const ChatButton = (props) => {
    return (
        <TouchableHighlight>
      <View style={styles.container}>
      <View  style={styles.left}>
        <Image style = {styles.icon}
            source = {require('../data/images/chaticon.png')}
            />
            <Text style={styles.titleText}>Chat Grupal</Text>
      </View>
      <View  style={styles.right}>
            <Text style={styles.textNot}>0</Text>
      </View>
      </View>
      </TouchableHighlight>
    )
  
}

const styles = StyleSheet.create({
  container: {
    height:72,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'white',
    paddingLeft: 10,
    width: '100%',
    marginTop: 16
  },
  icon : {
    height:46,
    width: 53
  },
  titleText :{
      color: '#310432',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 20
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'center',

  }, 
  textNot: {
      marginRight: 31
  }
})