import * as React from 'react';
import { View, StyleSheet, ToastAndroid, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer export default class Home extends React.Component {
 render() {
        return ( 
            <View style = {styles.container} > 
            <Text style = {styles.welcome} > This is Vibo Home! </Text> 
            <Button buttonStyle={styles.button}
            title="Proyecto" large />
            </View> );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
      backgroundColor: 'violet',
      marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
