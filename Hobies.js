import React, { Component } from 'react'  
import {StyleSheet,View, Text,Picker,TextInput} from 'react-native'  
  import db from '../config'
export default class Hobbies extends Component {  
    state = {  
        choosenIndex: 0,
        language:''  
    };  
  pickerActivity = (val) =>{
    this.setState({changedVal: val})
    alert("PICKER PRESSED")
  }
  onValueChange(value: string) {
    this.setState({
        language: value
         
    });
   this.updateDetails()
}
 updateDetails = () => {
    db.collection("users").add({
     Hobbies:this.state.language
      
    });
 }
    render() {  
        return (  
            <View style={styles.container}>  
                 
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                      onValueChange={this.onValueChange.bind(this)
                      
                      }
                    >  
                    <Picker.Item label="Reading" value="Reading" />  
                    <Picker.Item label="Dancing" value="Dancing" />  
                    <Picker.Item label="Cooking" value="Cooking" />  
                     <Picker.Item label="other" value="Other" /> 
                </Picker>
                   {this.state.language =='Other'?(<TextInput   style={styles.textInput} placeholder="enter other hobbies which are not listed above"/>):
               null}
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
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
    pickerStyle:{  
       marginTop: 20,
    marginLeft: 15,
        height: 50,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  
})  