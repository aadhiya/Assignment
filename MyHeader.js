import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class MyHeader extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            placement="left"
            leftComponent={<Icon name='bars' type='font-awesome' color='#000000'  onPress={() => this.props.navigation.toggleDrawer()}/>}
            centerComponent={{ text: 'VITA', style: { color: '#000000', fontWeight: 'bold', fontSize: 20 } }}
            backgroundColor="#D3D3D3"
          />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({});
