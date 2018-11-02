import { observable, action } from 'mobx';

export class AuthStore {

  @observable user = null;
  @observable error = null;

  fb = null;

  constructor(firebase){
    this.fb = firebase;

    
    this.fb.auth().onAuthStateChanged((receivedUser) => {
      if (receivedUser) {
        this.user = receivedUser;
      } else {
        this.user = null;
      }
    });
  }

  @action login(email, pass){
    this.fb.auth().signInWithEmailAndPassword(email, pass)
      .catch(error => {
        this.error = error.message;
      });
  }

  @action logout(){
    this.fb.auth().signOut();
  }

}