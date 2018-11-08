import React from 'react'
import { View,StatusBar, Text,ScrollView, StyleSheet } from 'react-native'
import { Header } from '../components/Header';
import { ProjectHeader } from '../components/ProjectHeader';
import {KanbanButton} from '../components/KanbanButton';
import { ChatButton } from '../components/ChatButton';
import { homeStore } from '../store/HomeStore';
import { FloatingButton } from '../components/FloatingButton';

export default class Project extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          backgroundColor="#310432"
          barStyle="light-content"
        />
        <Header/>
        <ProjectHeader />
        <ScrollView style= {styles.scrollCont} >
            <View style= {styles.projectContent}>
            <KanbanButton />
            <ChatButton />
            {homeStore.files.map(elemento =>
                <Text style= {styles.fixedTitle}>Documentos del Proyecto</Text>
            )}
            </View>
        </ScrollView>
        <FloatingButton/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollCont : {
    width:'100%',
        backgroundColor:'#FBFBFB',
        padding:10,
  },
  projectContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width:'100%',
    padding:2,
},fixedTitle: {
    color: '#666666',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16
}
})