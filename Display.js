import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class Display extends Component{
  constructor(props){
    super(props);
    this.state={
      userId                    : firebase.auth().currentUser.email,
      userName                  : "",
     image:'#',age:'', email:''
    }
  }



 


  getUserDetails=(userId)=>{
    db.collection("users").where('Email','==', userId).get()
    .then((snapshot)=>{
      snapshot.forEach((doc) => {
        this.setState({
          userName  :doc.data().FirstName+ " " + doc.data().LastName ,
          age:doc.data().Age,
          email:doc.data().Email

        })
      })
    })
  }

 



  componentDidMount(){
   
    this.getUserDetails(this.state.userId)
  }


    render(){
      return(
        <View style={styles.container}>
          <View style={{flex:0.1}}>
            <Header
              leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
              centerComponent={{ text:"View Details", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
              backgroundColor = "ff9966"
            />
          </View>
          <View style={{flex:0.3}}>
            <Card
                title={"User Information"}
                titleStyle= {{fontSize : 20}}
              >
              <Card >
                <Text style={{fontWeight:'bold'}}>Name : {this.state.userName}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Age : {this.state.age}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Email: {this.state.email}</Text>
              </Card>
            </Card>
          </View>
          
          
        </View>
      )
    }

}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
 
})
