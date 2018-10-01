import React, {Component} from "react";
import "./App.css";
import Form from "./Form.js";
import TodosList from "./TodosList.js";

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {todos: [], total: 0};
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(todoId) {
    this.setState((state) => {
      return {
        todos: state.todos.map((todo)=> {
          return {
            name: todo.name,
            id: todo.id,
            done: todo.id == todoId ? !todo.done : todo.done
          }
        })
      }
    });
  }
  onSubmit(value) {
    this.setState((state) => {
       return {
         todos: state.todos.concat([{
           name: value,
           id: state.total,
           done: false
         }]),
         total: state.total + 1
       }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, {this.props.name}!.</h1>

        <Form onSubmit={this.onSubmit}/>

        <TodosList todos={this.state.todos} onClick={this.onClick}/>
      </div>
    )
  };
}
export default App;
