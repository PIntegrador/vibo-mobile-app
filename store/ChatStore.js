import { observable, action, computed } from 'mobx';
import firebase from 'react-native-firebase';

class ChatStore {

    @observable messageList = [];
    @observable messageListOrdered = [];
    @observable ref = firebase.firestore().collection('Chat');
    @observable usersRef = firebase.firestore().collection('UsersViboApp');
    @observable loading = true;
    @observable project = "Fk3xZh2iBjOuwhYkifd0";
    @observable chatUsers = [];

    constructor(){
        if (this.project != ""){
            this.ref.onSnapshot((querySnapshot) => {
                this.messageList = []
                querySnapshot.forEach((doc) => {
                    let ele = {
                        messageText: doc.data().messageText,
                        user: doc.data().user,
                        projectid: doc.data().projectid,
                        id: doc.id,
                        date: doc.data().date,
                        usermail: doc.data().usermail
                    };
        
                    if(ele.projectid == this.project) {
                        this.messageList.push(ele);
                    }
                });
        
                this.messageListOrdered  = this.messageList
                .sort(function(a,b) {
                    return new Date(a.date) - new Date(b.date); 
                });
                
                });
            
            //CHAT USERS
                this.usersRef.onSnapshot((querySnapshot) => {
                    this.chatUsers = []
                    querySnapshot.forEach((doc) => {
                        let ele = {
                            email: doc.data().email,
                            profilePicture: doc.data().profilePicture,
                            rol: doc.data().rol,
                            id: doc.data().uid,
                        };
            
                        this.chatUsers.push(ele);
                        
                    });
            });
        }
     
    }

    @action sendMessage(message, userid, usermail) {
       this.ref.add({
          messageText: message,
          user: userid,   
          projectid: this.project,
          usermail: usermail,
          date: new Date()
        });
    }

    @action getUserInfo(anotherUid) {
       this.chatUsers.map(elemento => { 
           if(elemento.id == anotherUid){
                return elemento.email;
           }
       })
    }
}
export const chatStore = new ChatStore();

//id project prueba Fk3xZh2iBjOuwhYkifd0