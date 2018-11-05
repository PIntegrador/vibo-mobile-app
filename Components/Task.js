import React from 'react';
import { TouchableHighlight, View, Text, ToastAndroid } from 'react-native';
import { observer } from "mobx-react";



@observer export default class Task extends React.Component {


    render() {
        return (

            <TouchableHighlight>
            <Text> {this.props.name} </Text>
        </TouchableHighlight>
        )
    }
}
