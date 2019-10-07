import React, { Component } from 'react';
import { Text, TextInput, Alert, View, StyleSheet } from 'react-native';
import { CheckBox, Icon, Button } from 'native-base';

export default class Todo extends Component  {


  constructor(props)
{
  super(props)
  this.state ={
    todo :[
      {id: 0, task: 'work', checkMode:false},
      {id : 1, task : 'swim', checkMode:false},
      {id : 2, task : 'study', checkMode:false},
      {id : 3, task: 'code', checkMode:false},
      {id: 4, task: 'run', checkMode:false}
    ],    
    input : '',
    editMode : false,
    index : '',
    checkMode : true,
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

 onClickDelete(select){
  // console.log("Submitted" + select);
  const {todo} = this.state
  var filterIdx = todo.filter((item) => item.id !== select.id)
  this.setState({todo : filterIdx})
 }

 onClickEdit(itemEdit){
   this.setState({
     editMode :!this.setState.editMode, input : itemEdit.task, index : itemEdit.id
   })   

 }
 onClickUpdate (){
  const index = this.state.index
  const data = this.state.todo
  data[index].task = this.state.input
  this.setState({
    todo : [...data],
    input : '',
    index: '',
    editMode : false
  })
 }

 onClickCheck (item){
  let data = this.state.todo
  data[item].checkMode = !this.state.todo[item].checkMode
   this.setState({
     todo :[...data]
   })
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
      { 
        this.state.editMode === false ?  
        <Icon style={styles.iconAdd} name="md-add-circle" onPress={this.onClickAdd.bind(this)}/> 
        : 
        <Icon style={styles.iconUpdate} name="ios-create" onPress={() => this.onClickUpdate()} />
      }
    </View>
    <View >      
      {this.state.todo.map((item)=>
        <View key={item.id} style={{justifyContent : "center", flexDirection :"row", marginTop : 10}}>
          <CheckBox onPress={() => this.onClickCheck(item.id)} checked={item.checkMode} style={{margin : 20}} />
          <Text  style={[styles.text, {width : "70%"}]}>{item.task}</Text>
          <View style={{flexDirection : "row",  justifyContent: "space-evenly",marginLeft : 1, width : "20%"}}>              
              <Icon name="create" style={styles.iconEdit} onPress={() => this.onClickEdit(item)} />
              <Icon name="trash" style={styles.iconDelete} color="red" onPress={() => this.onClickDelete(item)}/>
          </View>
        </View>)}       
    </View>
  </View>
)}

}

const styles = StyleSheet.create({
  btnOn : {
    marginLeft : 5
  },
  text : {
    fontSize : 20,
    borderBottomWidth : 2,
    marginTop: 15,
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
  button: {
    borderRadius: 20,
    margin: 6,
    flex: 1
  },
  iconEdit: {
    color: 'green',
    marginTop: 15,
  },
  iconDelete: {
    color: 'red',
    marginTop: 15,
  },
  iconAdd: {
    color: '#008CBA',
    margin: 6,
    fontSize: 50
  },
  iconUpdate: {
    color: '#4CAF50',
    margin: 6,
    fontSize: 50
  },
});