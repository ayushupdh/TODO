import React from 'react';
import './App.css';
import Todo from './component/todo.js'

class App extends React.Component {
 
  state={
    todos :[
      {
        id:1,
        title: 'Take out trash',
        completed:false
      },
      {
        id:2,
        title: 'Throw away her dolls',
        completed:false
      },
      {
        id:3,
        title: 'No Dont do it',
        completed:false
      },
      {
        id:4,
        title: 'Lol Do it',
        completed:false
      }
    ]
  }
  markComplete=(id)=>{
    this.setState({
      todo: this.state.todos.map(todo=>{
        if(todo.id ===id){
          

          todo.completed= !todo.completed
        }
        return todo
      })
    })
  }
  dltfunc=(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]});
  }
  render(){
    return (
    
      <div>
      <h1>My Todo List</h1>
      <Todo todo={this.state.todos} markComplete={this.markComplete} dltfunc= {this.dltfunc}/>
      </div>
  );
  }
  

}

export default App;
