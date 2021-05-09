import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  TextInput,
  Switch,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase'
import db from '../config';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      
    };
  }

  
login=async(email,password)=>{
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('Home')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                alert('incorrect email or password')
                console.log('invaild')
                break
            }
          }
        }
        else{
            alert('enter email and password');
        }
      }
  toggleRememberMe = value => {
    this.setState({ rememberMe: value })
      if (value === true) {
        //user wants to be remembered.
        this.rememberUser();
      } else {
        this.forgetUser();
      }
  }

  rememberUser = async () => {
    try {
      await AsyncStorage.setItem('YOUR-KEY', this.state.email);
    } catch (error) {
      // Error saving data
    }
    };
    getRememberedUser = async () => {
    try {
      const username = await AsyncStorage.getItem('YOUR-KEY');
      if (username !== null) {
        // We have username!!
        return username;
      }
    } catch (error) {
      // Error retrieving data
    }
    };
    forgetUser = async () => {
      try {
        await AsyncStorage.removeItem('Longtail-User');
      } catch (error) {
      // Error removing
      }
  };

  
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['rgba(255, 153, 102,0.4)', 'transparent']} style={styles.background} />

        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.Title}>VITA</Text>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.loginTitle}>Login</Text>
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
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput}
            value={this.state.password}
          />
        </View>  

        <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={{ marginTop: 10, color: 'grey', fontSize: 13, fontWeight: 'bold', marginRight: 150  }}>
                Forgot your password?
              </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity 
            style={[styles.loginButton, { margin: 20 }]}
            onPress={() => this.login(this.state.email, this.state.password) }>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{ alignSelf: 'center' }}>Don't have an account?<Text style={{ color: '#000000', marginTop: 10, fontWeight: 'bold' }}> SignUp</Text></Text>
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
    backgroundColor: 'rgba(121, 210, 166)',
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
  loginTitle: {
    alignSelf: 'center',
    fontWeight: '400',
    color: '#000000',
    fontSize: 30,
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
  loginButton: {
    height: 50,
    width: 300,
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  loginButtonText: {
    fontSize: 20,
    color: '#332d2d',
    fontWeight: 'bold',
    alignSelf: 'center',
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
