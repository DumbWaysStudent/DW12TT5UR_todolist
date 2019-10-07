import React, { Component } from 'react';
import { Text, TextInput, Alert, View, StyleSheet } from 'react-native';
import { CheckBox, Icon, Button } from 'native-base';

export default class Todo extends Component  {


  constructor()
{
  super()
  this.state ={
    todo :[
      {id: 0, task: 'work'},
      {id : 1, task : 'swim'},
      {id : 2, task : 'study'},
      {id : 3, task: 'code'},
      {id: 4, task: 'run'}
    ],    
    input : ''
  }
}

onText(text) {
  this.setState({input:text});
 }

 onClickAdd(){
  if (this.state.input == '') {
    alert('Field Harus di isi');
  } else {
    const addTodo = {id: this.state.todo.length + 1, task : this.state.input}
    const newTodos = [...this.state.todo, addTodo]
    this.setState({
     todo : newTodos
    },
    this.setState({input : ''}))
  }
 }

render () {
return(
  <View>
    <View style={styles.direct}>
      <TextInput
            style={styles.form}
            placeholder="Add To Do List"
            onChangeText={(text) => this.onText(text)} 
            value={this.state.input}
      TextInput/>
      <Icon style={styles.iconAdd} name="md-add-circle" onPress={this.onClickAdd.bind(this)}/>
    </View>
    <View>
      {this.state.todo.map((item)=><Text key={item.id} style={styles.text}>{item.task}</Text>)}    
    </View>
  </View>
)}

}

const styles = StyleSheet.create({
  text : {
    fontSize : 20,
    borderBottomWidth : 2,
  },
  direct: {
    flexDirection : 'row',
    // marginTop: 10,
    marginBottom: 50,
  },
  form : {
    borderWidth : 2,
    width : '80%',
    borderRadius: 20,
    margin: 6,
    paddingLeft : 30,
    // margin: 5,
    // borderRadius: 8,
    flex : 4
  },
  iconAdd: {
    color: '#008CBA',
    margin: 6,
    fontSize: 50
  },
  button: {
    borderRadius: 20,
   margin: 6,
    flex: 1
  },
});