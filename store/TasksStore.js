import firebase from 'react-native-firebase';
import { observable, action, computed } from 'mobx';
import {ToastAndroid } from 'react-native';

class TasksStore {

    @observable ref = firebase.firestore().collection('tasks');
    @observable taskName = '';
    @observable tasks = [];
    @observable unsubscribe = null;
    @observable loading = true;


    constructor() {
    }

    functi() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    nofuncti() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {

        this.tasks = [];

        querySnapshot.forEach((doc) => {
            let task = {
                key: doc.key,
                name: doc.data().name,
                complete: doc.data().complete,
                date: doc.data().date,
                projectID: doc.data().projectID,
                userAsignedID: doc.data().userAsignedID
            }


            this.tasks.push(task)
        });

        this.loading = false;
    }

    updateTextInput(value) {
        this.taskName = value;
    }

    addTask() {

        this.ref.add({
            name: this.taskName,
            complete: "done",
            date: new Date(),
            projectID: "",
            userAsignedID: ""
        });
        this.taskName = '';
    }
}
export const tasksStore = new TasksStore();