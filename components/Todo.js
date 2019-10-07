import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Todo extends Component  {
constructor()
{
  super()
  this.state ={
    todo :['work','swim','study','code','run']
  }
}

render () {
return(
  <View>
    {this.state.todo.map((item)=><Text style={styles.container}>{item}</Text>)}    
  </View>
)}

}

const styles = StyleSheet.create({
  container : {
    fontSize : 20,
    borderBottomWidth : 2
  }
});