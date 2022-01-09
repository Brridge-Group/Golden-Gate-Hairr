import React from 'react'
import Todo from './Todo'
import AddTodoForm from './AddTodoForm'
import { withContext } from '../../contexts/AppContext'

function TodoList(props) {
  console.log('in todolist, props.todos', props.todos, props.todos.todos)

  const todos = props.todos.todos.map(todo => {
    return <Todo key={todo._id} todo={todo} editTodo={props.editTodo} deleteTodo={props.deleteTodo} />
  })

  return (
    <main>
      <AddTodoForm addTodo={props.addTodo} />
      {todos}
    </main>
  )
}

export default withContext(TodoList)
