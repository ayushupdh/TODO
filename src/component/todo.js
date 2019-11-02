import React from 'react';
import TodoItem from './TodoItem'

class Todo extends React.Component{
    render(){
        return this.props.todo.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} dltfunc={this.props.dltfunc} markComplete={this.props.markComplete}/>
        ));
    }
  
}

export default Todo;
