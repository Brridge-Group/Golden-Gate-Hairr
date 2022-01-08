import React, { Component } from 'react'

class AddTodoForm extends Component {
  constructor() {
    super()
    this.state = {
      todo: '',
    }
  }

  handleChange = e => {
    e.persist()
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  clearInputs = () => {
    this.setState({
      todo: '',
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state).then(response => {
      this.clearInputs()
    })
    // .catch(err => console.error(err.response.data.message))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add New Todo</h4>

          <input name='todo' value={this.state.todo} onChange={this.handleChange} type='text' placeholder='todo' />

          <button>+</button>
        </form>
      </div>
    )
  }
}

export default AddTodoForm
