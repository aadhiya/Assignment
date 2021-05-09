import React, { Component } from 'react';
import { Card } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MyHeader from '../components/MyHeader';
import Location from './Location'
import Hobbies from './Hobies'
import Pic from './Pic'
import firebase from 'firebase';
import db from '../config';

export default class Homescreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      firstName: '',
      lastName: '',
      age:'',
      location:'',
      hobbies:'',
      pic:'#',
      email: '',
      password: '',
     
    };
  }

 
  sendQuote = (userId) => {
    
      db.collection('users').add({
         FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Age:this.state.age,
      Email:this.state.email
      })
    


    return alert('profile data submitted successfully');
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <MyHeader navigation={this.props.navigation} />
        </View>
        <View style={{ marginLeft: 50 }}>
          <View>
            <TextInput
              onChangeText={(firstName) => {
                this.setState({ firstName });
              }}
              value={this.state.firstName}
              placeholder={'First Name'}
              style={styles.textInput}
            />
          </View>
          <View>
            <TextInput
              onChangeText={(lastName) => {
                this.setState({ lastName });
              }}
              value={this.state.lastName}
              placeholder={'Last Name'}
              style={styles.textInput}
            />
          </View>
          <View>
            <TextInput
              onChangeText={(age) => {
                this.setState({ age });
              }}
              keyboardType="numeric"
              value={this.state.age}
              placeholder={'Age'}
              style={styles.textInput}
            />
          </View>
           <View>
            <TextInput
              onChangeText={(email) => {
                this.setState({ email });
              }}
              keyboardType="email-adress"
              value={this.state.email}
              placeholder={'Email'}
              style={styles.textInput}
            />
          </View>
<View>
<Location/>
</View>
<View>
<Hobbies/>
</View>
<View>
<Pic/>
</View>
<View>
<TouchableOpacity onPress={()=>this.sendQuote(this.state.userId)}>
<Text>
              Please check all that apply:
            </Text>
            </TouchableOpacity>
</View>
          </View>

        <View style={{ marginTop: -220, marginLeft: 400 }}>
          <View>
            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold',  }}>
              Please check all that apply:
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 153, 102)',
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
 

});
