import {
    observable,
    action,
    computed
} from 'mobx';
import firebase from 'react-native-firebase';

class MainStore {
    @observable screen = "login";
    @observable where = "home";
    @observable settings = false;
    constructor() {

    }

    @action prueba() {
        this.ref.add({
            title: "Hello native",
            complete: false,
        });
    }
}
export const mainStore = new MainStore();