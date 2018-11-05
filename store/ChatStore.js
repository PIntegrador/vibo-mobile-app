import { observable, action, computed } from 'mobx';
import firebase from 'react-native-firebase';

class ChatStore {

    @observable messageList = [];
    @observable messageListOrdered = [];
    @observable ref = firebase.firestore().collection('Chat');
    @observable loading = true;
 
  /*  
    onCollectionUpdate = (querySnapshot) => {
           
            this.loading = false;
        }*/
    constructor(){
      this.ref.onSnapshot((querySnapshot) => {
        this.messageList = []

        querySnapshot.forEach((doc) => {
            let ele = {
                messageText: doc.data().messageText,
                user: doc.data().user,
                projectid: doc.data().projectid,
                id: doc.id,
                date: doc.data().date
            };
            this.messageList.push(ele);
        });

        this.messageListOrdered  = this.messageList
        .sort(function(a,b) {
            return new Date(a.date) - new Date(b.date); 
        });
        
        });
        
    }

    @action sendMessage(message, userid) {
       this.ref.add({
          messageText: message,
          user: userid,   
          projectid: "projectID",
          date: new Date()
        });
}


}
export const chatStore = new ChatStore();