import React from 'react'
import { ToastAndroid, StyleSheet, TextInput, Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { tasksStore } from '../store/TasksStore';
import { observer } from "mobx-react";
import Task from '../Components/Task';
import Chart from '../Components/Chart';
import Svg, {
    Circle,
    G,
    TSpan,
} from 'react-native-svg';

const { width, height } = Dimensions.get('window');


@observer export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);


    }

    /*
        componentDidMount() {
            tasksStore.functi();
        }
    
        componentWillUnmount() {
            tasksStore.nofuncti();
        }*/

    list(array) {

        return array.map(e => {
            return (
                <Task key={e.key} doc={e.doc} name={e.name} complete={e.complete} />
            )
        })
    }

    render() {


        return (
            <View>
                <ScrollView>
                    <View style= {styles.chartSection}>
                        <Text style= {styles.generalTitle}> Proyecto en Kanban </Text>

                    <View style={styles.chartContainer} >
                        <Chart kind= {"Pendiente"} percentage= {tasksStore.todosPercentage} color={"#F66880"} />
                        <Chart kind= {"En marcha"} percentage= {tasksStore.doingsPercentage} color={"#FDC741"} />
                        <Chart kind= {"Terminado"} percentage= {tasksStore.donesPercentage} color={"#32F373"} />
                    </View>
                    </View>
                    <View style={styles.generalContainer}>
                        <View style={styles.todoContainer}>
                            <View style={styles.markerContainer}>
                                <View style={[styles.marker, styles.mTodo]} />
                                <Text style={[styles.mTodo, styles.markerText]}> Pendiente</Text>
                            </View>
                            {this.list(tasksStore.todos)}
                        </View>
                        <View style={styles.todoContainer}>
                            <View style={styles.markerContainer}>
                                <View style={[styles.marker, styles.mDoing]} />
                                <Text style={[styles.mDoing, styles.markerText]}> En marcha</Text>
                            </View>
                            {this.list(tasksStore.doings)}
                        </View>
                        <View style={styles.todoContainer}>
                            <View style={styles.markerContainer}>
                                <View style={[styles.marker, styles.mDone]} />
                                <Text style={[styles.mDone, styles.markerText]}> Terminadas</Text>
                            </View>
                            {this.list(tasksStore.dones)}
                        </View>


                    </View>

                    <TextInput
                        placeholder={'Add TODO'}
                        value={tasksStore.taskName}
                        onChangeText={(text) => tasksStore.updateTextInput(text)}
                    />
                    <Button
                        title={'Add TODO'}
                        disabled={!tasksStore.taskName.length}
                        onPress={() => tasksStore.addTask()}
                    />
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    generalTitle: {

        fontWeight: 'bold',
        fontSize: 16,
        color: '#310432'
    },
    chartSection: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,        
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 10
    },
    generalContainer: {
        margin: 10
    },
    todoContainer: {
        paddingBottom: 10,
        paddingTop: 5,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,

    },
    markerContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignContent: 'center',
        alignItems: 'center'
    },
    marker: {
        width: 10,
        height: 10,

    },
    markerText: {
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    mTodo: {
        color: '#F66880',
        backgroundColor: '#F66880',

    },
    mDoing: {
        color: '#FDC741',
        backgroundColor: '#FDC741',
    },
    mDone: {
        color: '#32F373',
        backgroundColor: '#32F373',
    },

})