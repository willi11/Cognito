import React from 'react';
import { StyleSheet, Text, TextInput, View,Button,Image, TouchableHighlight } from 'react-native';
//import { CheckBox } from 'react-native-elements'
export default class App extends React.Component {
  render() {
	  
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
		backgroundColor: '#000000',
      }}>
        <View style={{width: 250, height: 50}}>
		<TextInput style={{alignItems: 'center',height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="User Name"/>
		</View>
		<View style={{width: 250, height: 50}}>
		<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} inlineImageLeft='' secureTextEntry={true}  placeholder="Password"/>
		</View>
		<View style={{width: 150, height: 150}}>
		<Text>Forgot your password?</Text>
		</View>
		<View style={{justifyContent: 'center',alignItems: 'flex-start', width: 250, height: 50}}>
		<Button title='SIGN UP'/>
		</View>		
	</View>
	
    );
	
  }
}