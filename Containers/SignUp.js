import React from 'react'
import { StyleSheet, Text, TextInput, View, Picker, Image, StatusBar, ToastAndroid } from 'react-native'
import { Button } from 'react-native-elements'

import { authStore } from '../store/AuthStore';
import { mainStore } from '../store/MainStore';

import { observer } from 'mobx-react';
import { observable } from 'mobx';


@observer export default class SignUp extends React.Component {

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
    authStore.register(this.credentials.email, this.credentials.password, this.credentials.rol);
  }

render() {

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#FBFBFB"
          barStyle="dark-content"
        />
        <Image 
          style={styles.logo}
          source = {require('../data/images/logo.png')}
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

        {/* ------------- ROL PICKER ----------------*/}
        <Text style={styles.textLabel}>
          Rol
        </Text>
        <View style={styles.pickerView}>
          <Picker
              selectedValue = {this.credentials.rol}
              onValueChange = {e => this.credentials.rol = e}
              style={styles.picker}>
              <Picker.Item label="Select your Rol..." value="nothing" />
              <Picker.Item label="Editor" value="editor" />
              <Picker.Item label="Journalist" value="journalist" />
          </Picker>
        </View>

        {/* --------------- BUTTONS -----------------*/}
        <Button title="Registrarse"
          onPressOut={()=>{
            this.onSubmit();
          }}
          buttonStyle={styles.button}
          titleStyle={styles.buttonStyle}
          large
        />
        <Text style={{marginTop: 20}}>
          ¿Ya tienes una cuenta?
        </Text>
        <Button
          title="Inicia Sesión"
          titleStyle={{fontWeight: "bold"}}
          buttonStyle={styles.buttonRegistrate}
          color = "#310432"
          large
          onPressOut={() => {
            mainStore.screen = "login"
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
    backgroundColor: "#FBFBFB",
    padding: 20
  },
  logo: {
    marginBottom: 20,
    marginTop: 20
  },
  title: {
    color: "#310432",
    fontSize: 18,
    fontWeight: "200",
    width: "70%",
    textAlign: "center",
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    fontSize: 16
  },
  picker: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  pickerView: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginBottom: 30,
    borderRadius: 5
  },
  textLabel: {
    width: "100%",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 2,
    color: "black"
  },
  button: {
    backgroundColor: "#310432",
    width: 160,
    height: 45,
    borderRadius: 5
  },
  buttonTitle:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  textRegistrate: {
    marginTop: 15,
    marginBottom: 2,
    color: "#310432",
  },
  buttonRegistrate: {
    backgroundColor: "#FBFBFB",
    height: 20
  },
  buttonTextLogin: {
    backgroundColor: "#310432",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
})