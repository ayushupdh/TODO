import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle=()=>{
        return{
            background: "#f4f",
            padding: '30px',
            margin:'2px',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'


        }
    }
  
    render() {
        const {id, title }= this.props.todo;
        return (
            <div style={this.getStyle()}>
                    
               <p>
               <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{'  '}

               {title}
               <button style={buttonStyle} onClick={this.props.dltfunc.bind(this,id)}>x</button>
               
               </p> 
            </div>
        )
    }
}
const buttonStyle={
    background:'red',
    padding: '4px 3px',
    border: '1px solid black ',
    borderRadius:'20%',
    cursor:'pointer',
    float:'right',
    margin:'2px 2px'

}
export default TodoItem
