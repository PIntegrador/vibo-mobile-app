import {
  observable,
  action,
  computed
} from 'mobx';
import firebase from 'react-native-firebase';
import React from 'react'
import {
  ToastAndroid
} from 'react-native'

class AuthStore {

  @observable user = null;
  @observable error = null;
  @observable errorMsg = "";
  @observable isError = false;
  @observable isNewUSer = false;

  @observable ref = firebase.firestore().collection('UsersViboApp');

  @observable credentials = {
    email: "",
    password: "",
    rol: "",
  }
  @observable newUser = {
    email: "",
    rol: "",
    profilePicture: "",
    uid: "",
  }

  constructor() {
    firebase.auth().onAuthStateChanged((receivedUser) => {
      if (receivedUser) {
        this.user = receivedUser;
        if(this.isNewUSer){
          this.addNewUser(this.user)
          this.isNewUSer = false;
        }
      } else {
        this.user = null;
      }
    });
  }

  @action register(email, password, rol) {
    this.credentials.email = email;
    this.credentials.password = password;
    this.credentials.rol = rol;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        isError = true;
        this.errorMsg = errorMessage;
        if (errorCode == 'auth/weak-password') {
          ToastAndroid.show('The password is too weak.', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(this.errorMsg, ToastAndroid.SHORT);
        }
      });

      this.isError = false;
      this.isNewUSer = true;
      ToastAndroid.show('Registrando', ToastAndroid.SHORT);
  }
  @action addNewUser(user) {
    if (user != null) {
      this.newUser.email = user.email;
      this.newUser.rol = this.credentials.rol;
      this.newUser.uid = user.uid;
      let img = user.email.split("@");
      this.newUser.profilePicture = img[0] + ".jpg";

      this.ref.add(this.newUser);
    }
  }


  @action signOut() {
    firebase.auth().signOut().then(function () {
      ToastAndroid.show('Sesión cerrada exitosamente.', ToastAndroid.SHORT);
    }).catch(function (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    });
  }
}
export const authStore = new AuthStore();