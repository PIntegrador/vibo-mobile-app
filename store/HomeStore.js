import {
    ToastAndroid
} from 'react-native';
import {
    observable,
    action,
    computed
} from 'mobx';

import firebase from 'react-native-firebase';
import {
    authStore
} from './AuthStore';

console.ignoredYellowBox = true;
class HomeStore {

    @observable projects = ["hola"];
    @observable folders = [];
    @observable files = [];

    @observable projectsRef = firebase.firestore().collection('Projects');
    @observable foldersRef = firebase.firestore().collection('Folders');
    @observable filesRef = firebase.firestore().collection('Files');

    constructor() {
        
        this.projectsRef.onSnapshot((querySnapshot) => {
            this.projects = [];
            let projectsTemp = []
            

            querySnapshot.forEach(function (doc) {
                if (doc.data().users != null) {

                    doc.data().users.forEach(element => {
                        if (authStore.user.uid == element) {
                            let project = {
                                name: doc.data().name,
                                show: doc.data().show,
                                users: doc.data().users
                            }
                            projectsTemp.push(project);
                        }
                    });
                }
            });
            this.projects = projectsTemp;
        });

        this.foldersRef.onSnapshot((querySnapshot) => {
            this.folders = [];
            let foldersTemp = []

            querySnapshot.forEach(function (doc) {
                if (doc.data().users != null) {
                    doc.data().users.forEach(element => {
                        if (authStore.user.uid == element) {
                            let project = {
                                name: doc.data().name,
                                show: doc.data().show,
                                users: doc.data().users
                            }
                            foldersTemp.push(project);
                        }
                    });
                }
            });
            this.folders = foldersTemp;
        });

        this.filesRef.onSnapshot((querySnapshot) => {
            this.files = [];
            let filesTemp = []

            querySnapshot.forEach(function (doc) {
                if (doc.data().users != null) {
                    doc.data().users.forEach(element => {
                        if (authStore.user.uid == element) {
                            let project = {
                                name: doc.data().name,
                                show: doc.data().show,
                                users: doc.data().users
                            }
                            filesTemp.push(project);
                        }
                    });
                }
            });
            this.files = filesTemp;
        });
    }
    @action prueba(user, guests) {
        let users = [];
        tempArray = guests.split(",");
        tempArray.push(user)
        users = tempArray;
        this.projectsRef.add({
            name: "Proyecto de Prueba",
            users: users,
            show: true,
        });
    }


}
export const homeStore = new HomeStore();