import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  Linking,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SignUpScreen extends Component {
 constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      confirmPassword: "",
      errorMessage: null,
    };
  }

 userSignUp = (emailId, password, confirmPassword) => {
   
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            contact: this.state.contact,
            Email: this.state.emailId,
            address: this.state.address,
           
          });
             alert("Signup Successful")
      this.props.navigation.navigate('Login');
       })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    
  };
 

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['rgba(255, 153, 102,0.4)', 'transparent']} style={styles.background} />
        
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.Title}>VITA</Text>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.signUpTitle}>SignUp</Text>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <TextInput
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
            autoCapitalize="none"
            placeholder="Email"
            keyboardType="email-address"
            style={styles.textInput}
            value={this.state.email}          
          />
         
          
            <TextInput
              style={styles.textInput}
              placeholder={"Contact"}
              maxLength={10}
              keyboardType={"numeric"}
              
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

          
            <TextInput
              style={styles.textInput}
              placeholder={"Address"}
              multiline={true}
              onChangeText={text => {
                this.setState({
                  address: text
                });
              }}
            />

                  
            <TextInput
              style={styles.textInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

           
            <TextInput
              style={styles.textInput}
              placeholder={"Confrim Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />
          
        </View>  

        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity 
            style={[styles.signUpButton, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => this.userSignUp(this.state.email, this.state.password) }>
            <Text style={styles.signUpButtonText}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 15, alignSelf: 'center', }}>
        
        </View>

        <View style={{ alignSelf: 'center' }}>
          <TextInput style={styles.line} />
        </View>

        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{ alignSelf: 'center' }}>Already have an account? <Text style={{ color: '#000000', marginTop: 10, fontWeight: 'bold' }}> Login</Text> </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 153, 102)',
  },
  background: {
    top: 0,
    left: 0,
    right: 0,
    height: 800,
    position: 'absolute',
  },
 Title: {
    alignSelf: 'center',
    fontWeight: '400',
    color: '#000000',
    fontSize: 40,
  },
  signUpTitle: {
    alignSelf: 'center',
    fontWeight: '400',
    color: '#000000',
    fontSize: 30,
  },
  line: {
    height: 0,
    margin: 5,
    width: 350,
    alignSelf: 'center',
    borderColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    margin: 10,
    height: 40,
    width: 300,
    fontSize: 20,
    paddingLeft: 10,
    borderColor: '#616161',
    borderBottomWidth: 1.5,
  },
  signUpButton: {
    height: 50,
    width: 300,
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  signUpButtonText: {
    fontSize: 20,
    color: '#332d2d',
    fontWeight: 'bold',
  },
  error: {
    fontSize: 13,
    color: '#E9446A',
    fontWeight: '600',
    textAlign: 'center',
  },
  errorMessage: {
    height: 72,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
});
