import React, { Component } from 'react'

export default class TodoForm extends Component {
constructor(props) {
    super(props);

    this.state = {
        name:'',
        complete: false,
    }
}

onSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({
        name: '',
        complete: false,
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
    render() {
        return (
            <form onSubmit={this.onSubmit}> 
            <div>
                <label htmlFor="name">Name</label>    
                <input type="text" id="name"
                    Value= { this.state.name } onChange={this.onNameChange} />
            </div>
            <div>
                <label htmlFor="complete">Completed?</label>
                <input type="checkbox" id="complete" value="complete"
                    checked={ this.state.complete } onChange={this.onCompleteChange} />
            </div>
            <button type="submit">Add</button>
            </form>
        )
    }
}
