import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'; //points to the css bootstrap file
import './App.css';
import TodoForm from "./component/TodoForm"
import { Button, Col, Row } from 'react-bootstrap' //using the Button, Col, Row

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          name: 'Todo Item 1',
          complete: false,
        },
        {
          name: 'Todo Item the Second',
          complete: false,
        },
        {
          name: 'The Real todo item',
          complete: true,
        }
      ],
    }
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
        
        <TodoForm onFormSubmit={this.onFormSubmit} />
        <ul>
          { this.state.todos.map ((todo, index) => {
            return (
              <li key={index}>{ todo.name } ({ todo.complete ? 'done' : 'not done' })</li>
            )
          })}
        </ul>'
        </header>'
      </div>

    );
  }

}

export default App;
