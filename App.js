import React, { Component } from 'react';
import { Text, TextInput, Alert, View, StyleSheet } from 'react-native';
import { CheckBox, Icon, Button } from 'native-base';
import Todo from './components/Todo'

export default class Done extends Component  {


  constructor(props)
{
  super(props)
  
}


render () {
return(
  <View>
    <Todo/>
  </View>
)}

}

