import React, { Component } from "react";
import './TodoApp.css'

class TodoApp extends Component {
  state = {
    todo: "",
    todos: []
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, {id: Math.random(),name: this.state.todo}],
      todo: ''
    });
  };

  handleDelete =(id) => {
    let todos = this.state.todos;
    todos = todos.filter(todo => todo.id !== id)
    this.setState ( {
      todos
    })
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>Todo App</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.todo}/>
          <input type="submit" className="btn btn-violet" value="Add Todo" />
        </form>
        <ul>
          {this.state.todos.map((todo)=> (
            <li key={todo.id}> 
            <span>{todo.name} </span>
            <button onClick={() => this.handleDelete(todo.id)} className='btn delete-btn'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
