import React from 'react'
import Todo from './Todo'
import AddTodoForm from './AddTodoForm'
import { withContext } from '../../contexts/AppContext'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  // console.log('in todolist, props.todos', props.todos, props.todos.todos)

  // const todos =
  //   // const todos = !props.todos.length
  //   // ? null
  //   // :
  //   props.todos.todos.map(todo => {
  //     return <Todo key={todo._id} todo={todo} editTodo={props.editTodo} deleteTodo={props.deleteTodo} />
  //   })
  render() {
    // const todos =

    console.log('todo list', this.props)
    return (
      <main>
        {/* <AddTodoForm addTodo={props.addTodo} />
        {todos} */}
      </main>
    )
  }
}

export default withContext(TodoList)
