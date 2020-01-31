import React, { Component } from 'react';
import Todoinput from './comp/todoinput';
import Todolist from './comp/todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import './App.css';
class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  };
  handlechange = e =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = e =>{
    e.preventDefault();
    const newItem ={
      id:this.state.id,
      title:this.state.item
    }
    // console.log(newItem);
    const updated = [...this.state.items,newItem];
    this.setState({
      items:updated,
      item:"",
      id:uuid(),
      editItem:false
    })
  };
  clear=()=>{
    this.setState({
      items:[]
    })
  };
  hdelete=(id)=>{
    const filterd = this.state.items.filter(item=> item.id !== id);
    this.setState({
      items:filterd
    });
  };
  hedit= (id) =>{
    const filterd = this.state.items.filter(item=> item.id !== id);
    const toedit = this.state.items.filter(item=> item.id === id);
    this.setState({
      items:filterd,
      item:toedit.title,
      editItem:true,
      id:id
    });
  };
  render(){
  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo App</h3>
          <Todoinput item={this.state.item} handlechange={this.handlechange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
          
          <Todolist items={this.state.items} clear={this.clear} hdelete={this.hdelete} hedit={this.hedit}/>
        </div>
      </div>
    </div>
    
  );
  }
}

export default App;
