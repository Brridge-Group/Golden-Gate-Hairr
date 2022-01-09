import React from 'react'
import Todo from '../Todos/Todo'
import AddTodoForm from '../Todos/AddTodoForm'
import { withContext } from '../../contexts/AppContext'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    if (!this.props.todos.length) {
      this.props.getTodos()
    }
  }
  render() {
    console.log('todo list', this.props.todos.todos)
    if (!this.props.todos.length) {
      return null
    }
    const todos = this.props.todos.todos.map(todo => <Todo key={todo._id} todo={todo} editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo} />)

    return (
      <main>
        <AddTodoForm addTodo={this.props.addTodo} />
        {todos}
      </main>
    )
  }
}

export default withContext(TodoList)
