import React from 'react'
import { View,StatusBar, Text,TouchableHighlight, StyleSheet } from 'react-native'
import { Header } from '../components/Header';
import { ProjectHeader } from '../components/ProjectHeader';

export  const KanbanButton = (props) => {
    return (
        <TouchableHighlight>
      <View style={styles.container}>
        <Text style={styles.titleText}>Progreso del Proyecto</Text>
      </View>
      </TouchableHighlight>
    )
  
}

const styles = StyleSheet.create({
  container: {
    height:72,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'white'

  },titleText :{
      color: '#310432',
      fontSize: 18,
      fontWeight: 'bold'
  }
})