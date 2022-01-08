import React from 'react'

function Todo(props) {
  console.log('in todo, props.todo', props.todo, props.deleteTodo, props.todo._id)
  return (
    <>
      <div className='card w-50 mx-auto'>
        <div className='card-body'>
          <h3>{props.todo.todo}</h3>

          <button onClick={() => props.deleteTodo(props.todo._id)}>X</button>
        </div>
      </div>
    </>
  )
}

export default Todo
