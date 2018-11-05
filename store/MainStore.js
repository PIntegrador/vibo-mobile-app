import {
    observable,
    action,
    computed
} from 'mobx';
import firebase from 'react-native-firebase';

class MainStore {
    @observable screen = "login";

    constructor() {

    }
    
}
export const mainStore = new MainStore();