import * as React from 'react'
import Geocoder from 'react-native-geocoding';
import {
  View,
  Text,
  TextInput,
   StyleSheet,
  TouchableOpacity,Image
} from 'react-native'

export default class Location extends React.Component{

  getlocation(){
// Initialize the module (needs to be done only once)
Geocoder.setApiKey("AIzaSyBRt1t4j8rN0FU_P2eT2OZy-DF_wki5Xes"); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language


// Search by geo-location (reverse geo-code)
Geocoder.from(41.89, 12.49)
		.then(json => {
        		var addressComponent = json.results[0].formatted_address;
			alert(addressComponent);
		})
		.catch(error => console.warn(error));
}
render(){
   return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>this.getlocation()}>
      <Text style={{fontSize:30}}>Location
      </Text></TouchableOpacity>
      </View>
 );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(156, 156, 156)',
  },
  });
