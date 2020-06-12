import React, { Component } from 'react'
import './style.css';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            complete: false,
            
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state); //getting it from the app.js PROPS
        this.setState({
            name: '',
            complete: false,
        })
    }

    onDelete = (e) => { 
        this.setState({
            delete: e.target.value,
        })
    }
    onNameChange = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    onCompleteChange = (e) => {
        this.setState({
            complete: e.target.checked
        })
    }

    // removeTodo(e) {
    //     this.props.removeTodo();  //getting it from the app.js  PROPS
    // }

    render() {
        return (
            <div class="main">
                <form class="todoform" onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="name">Enter Missions here =></label>
                        <input type="text" id="name"
                            Value={this.state.name} onChange={this.onNameChange} />
                        <label htmlFor="complete">Completed?</label>
                        <input type="checkbox" id="complete" value="complete"
                            checked={this.state.delete} onChange={this.onDelete} />
                    </div>
                    <button type="submit">Add</button>
                    <div>
                        {/* <button onClick={this.props.removeTodo} type="submit">Delete</button> */}
                    </div>
                </form>
            </div>
        )
    }
}
