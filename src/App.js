import React from 'react';
import './App.css';
import Todo from './component/Todo'

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
        title: 'Kick them out of the room',
        completed:false
      },
      {
        id:4,
        title: 'Fuck them',
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
  dltfunc=()=>{
    
  }
  render(){
    return (
    
      <div>
      <h1>Hello, world!</h1>
      <Todo todo={this.state.todos} markComplete={this.markComplete} dltfunc= {this.dltfunc}/>
      </div>
  );
  }
  

}

export default App;
