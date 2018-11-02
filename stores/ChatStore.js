import { observable, action } from 'mobx';
import { ToastAndroid } from 'react-native';

export class ChatStore {

  @observable messageList = [];

  fb = null;
  refMessages = null;

  constructor(firebase){
    this.fb = firebase;

    this.refMessages = this.fb.database().ref('chat');

    this.refMessages.on('child_added', (snapshot) => {
      let obj = snapshot.val();
      obj.key = snapshot.key;
      this.messageList.push(obj);
      //ToastAndroid.show(JSON.stringify(obj), ToastAndroid.LONG);
    });

    this.refMessages.on('child_removed', (snapshot) => {
      let index = this.messageList.findIndex(function(elem){
        if(elem.key == snapshot.key) return true;
      });
      this.messageList.splice(index, 1);
    });
  }


  @action sendMessage(message, user){
    let ref = this.refMessages.push();
    ref.set({
      message: message,
      user: user.email
    });
  }

  @action deleteMessage(key){
    this.refMessages.child(key).remove();
  }
}