import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { withContext } from '../contexts/AppContext'

const NewTodo = () => {
  const [todo, setTodo] = useState()

  const history = useHistory()

  const todoSubmitHandler = async event => {
    event.preventDefault()

    try {
      console.log('in try todos')
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todo }),
      })

      if (!response.ok) {
        throw new Error('Could not save new todo')
      }

      history.push('/todos')
    } catch (err) {}
  }

  return (
    <>
      <div className='card w-50 mx-auto'>
        <div className='card-body'>
          <form onSubmit={todoSubmitHandler}>
            <div className='form-group'>
              <label>Name</label>
              <input name='name' type='text' className='form-control' placeholder='Enter todo' onChange={e => setTodo(e.target.value)} />
            </div>
          </form>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-primary' onClick={todoSubmitHandler}>
            Save
          </button>{' '}
        </div>
      </div>
    </>
  )
}

export default withContext(NewTodo)
