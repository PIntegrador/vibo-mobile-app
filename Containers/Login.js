import React from 'react'
import { StyleSheet, Text, TextInput, View, Picker, Image, StatusBar, ToastAndroid } from 'react-native'
import { Button } from 'react-native-elements'

import { authStore } from '../store/AuthStore';
import { mainStore } from '../store/MainStore';

import { observer } from 'mobx-react';
import { observable } from 'mobx';



@observer export default class Login extends React.Component {

  @observable credentials = {
    email: "",
    password: "",
    rol: "nothing"
  }

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    authStore.login(this.credentials.email, this.credentials.password);
  }

render() {

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#310432"
          barStyle="light-content"
        />
        <Image 
          style={styles.logo}
          source = {require('../data/images/logoBlanco.png')}
        />
        <Text style={styles.title}>
          Tus proyectos de visualizaciones contigo siempre
        </Text>
        {/* ------------- EMAIL INPUT ---------------*/}
        <Text style={styles.textLabel}>
          Correo Empresarial
        </Text>
        <TextInput
          //value={this.credentials.email}
          onChangeText={e => this.credentials.email = e}
          placeholder="example@vibo.com"
          autoCapitalize="none"
          style={styles.textInput}
        />

        {/* ----------- PASSWORD INPUT --------------*/}
        <Text style={styles.textLabel}>
          Contraseña
        </Text>
        <TextInput
          secureTextEntry
          //value={this.credentials.email}
          onChangeText={e => this.credentials.password = e}
          placeholder = "••••••••"
          autoCapitalize = "none"
          style={styles.textInput}
        />

        {/* --------------- BUTTONS -----------------*/}
        <Button title="Iniciar Sesión"
          onPressOut={()=>{
            this.onSubmit();
          }}
          color = "#310432"
          buttonStyle={styles.button}
          titleStyle={styles.buttonStyle}
          large
        />
        <Text style={{marginTop: 45, color: "#ddd"}}>
          ¿No tienes una cuenta?
        </Text>
        <Button
          title="Registrate"
          titleStyle={{fontWeight: "bold"}}
          buttonStyle={styles.buttonRegistrate}
          color = "white"
          large
          onPressOut={() => {
            mainStore.screen = "signup"
          }}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#310432",
    padding: 20
  },
  logo: {
    marginBottom: 20,
    marginTop: 20
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    width: "70%",
    textAlign: "center",
    marginBottom: 45,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 16
  },
  textLabel: {
    width: "100%",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 2,
    color: "white"
  },
  button: {
    backgroundColor: "white",
    width: 160,
    height: 45,
    borderRadius: 5,
    marginTop: 50
  },
  buttonTitle:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  textRegistrate: {
    marginTop: 15,
    marginBottom: 2,
    color: "white",
  },
  buttonRegistrate: {
    backgroundColor: "#310432",
    height: 20
  },
  buttonTextLogin: {
    backgroundColor: "#310432",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
})