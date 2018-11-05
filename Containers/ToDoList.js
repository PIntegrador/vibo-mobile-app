import React from 'react'
import { ToastAndroid, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native'
import { Button } from 'react-native-elements'
import { tasksStore } from '../store/TasksStore';
import { observer } from "mobx-react";
import Task from '../Components/Task';



@observer export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        tasksStore.functi();
    }
    componentWillUnmount() {
        tasksStore.nofuncti();
    }

    done() {
        doneArray = tasksStore.tasks
        .filter((e) => { return e.complete == "done" })
        .sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })

        return doneArray.map(e => {
            return (
                <Task name={e.name} />
            )

        })
    }
    todo() {
        todoArray = tasksStore.tasks
        .filter((e) => { return e.complete == "todo"})
        .sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })


        return todoArray.map(e => {
            return (
                <Task name={e.name} />
            )

        })
    }
    doing() {

        doingArray = tasksStore.tasks
        .filter((e) => { return e.complete == "doing" })
        .sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })


        return doingArray.map(e => {
            return (
                <Task name={e.name} />
            )

        })
    }
    render() {


        return (
            <View>
                <View>
                    {this.todo()}
                    {this.doing()}
                    {this.done()}

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
            </View>
        )
    }
}