import firebase from 'react-native-firebase';
import { observable, action, computed } from 'mobx';
import {ToastAndroid } from 'react-native';

class TasksStore {

    @observable ref = firebase.firestore().collection('tasks');
    @observable taskName = '';
    @observable tasks = [];
    @observable todos = [];
    @observable doings = [];    
    @observable dones = [];

    @observable unsubscribe = null;
    @observable loading = true;


    constructor() {
        this.ref.onSnapshot(this.onCollectionUpdate);
    }
/*
    mount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    unMount() {
        this.unsubscribe();
    }
*/
    onCollectionUpdate = (querySnapshot) => {

        this.tasks = [];

        querySnapshot.forEach((doc) => {
            let task = {
                key: doc.key,
                doc: doc,
                name: doc.data().name,
                complete: doc.data().complete,
                date: doc.data().date,
                projectID: doc.data().projectID,
                userAsignedID: doc.data().userAsignedID
            }
            this.tasks.push(task)
        });

        this.tasks = this.tasks
        .sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

        this.todos = this.tasks
        .filter((e) => { return e.complete == "todo" })

        this.doings = this.tasks
        .filter((e) => { return e.complete == "doing" })

        this.dones = this.tasks
        .filter((e) => { return e.complete == "done" })

        this.loading = false;
    }

    updateTextInput(value) {
        this.taskName = value;
    }

    addTask() {

        this.ref.add({
            name: this.taskName,
            complete: "todo",
            date: new Date(),
            projectID: "",
            userAsignedID: ""
        });
        this.taskName = '';
    }
}
export const tasksStore = new TasksStore();