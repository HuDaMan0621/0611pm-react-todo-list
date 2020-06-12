import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'; //points to the css bootstrap file
import './App.css';
import TodoForm from "./component/TodoForm"
// import { Button, Col, Row } from 'react-bootstrap' //using the Button, Col, Row

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          name: 'Todo Item I will be here forever when the browser reFreshes', //0
          complete: false, 
        },
        {
          name: 'Todo Item the Second, me too!',    //1
          complete: false,
        },
        { 
          name: 'The Real todo item, me 3!',   //2
          complete: true,
        }
      ],
    }
  }

  removeTodo(indexToRemove) {
    const filtersTodo = this.state.todos.filter((todoObj, index) => {   //filter, it's going to take a call back function, take each item on the array {obj, obj}, returns a true or false/ if returns false, it will not put in the filter.
    return this.state.todos[index] !== this.state.todos[indexToRemove] //this statement returns a boolean, it checks each item in the array, if it's not the item we are trying to remove, it puts it into filters todos.
    })
    this.setState({
      todos: filtersTodo //this part, we change the array to an new array that doesn't have removed item. 
    })
  }

  onFormSubmit = (data) => {
    this.setState({
      todos: this.state.todos.concat(data)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Real todo App</h1>
      {/* removeTodo and onFOrmSUbmit are the 2 props */}
          <TodoForm removeTodo={this.removeTodo} onFormSubmit={this.onFormSubmit} /> 
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                  <div> 
                  <li key={index}><p>{todo.name}</p> </li>
                  <button onClick={this.removeTodo.bind(this, index)}>Remove</button>
                  </div>
              )
            })}
                  {/* <li onClick={() => { this.removeItem(todo, index) }} key={index}>{todo}</li> */}
          </ul>
        </header>
      </div>

    );
  }

}

export default App;
