import React, { useState, useEffect } from 'react'

import ContentHeader from '../components/ContentHeader'
import UserService from '../services/user-service'

const Home = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()

        setContent(_content)
      }
    )
  }, [])
  return (
    <React.Fragment>
      <ContentHeader title='Home' />
      <div className='card w-50 mx-auto'>
        <div className='card-header'>
          <h5 className='m-0'>Home stuff</h5>
        </div>
        <div className='card-body'>
          <h6 className='card-title'>This is the home page</h6>

          <p className='card-text'>
            Sed lobortis magna quis lectus vulputate ornare. Nunc est velit,
            pharetra sit amet ex in, molestie egestas ex. In ac urna vel purus
            accumsan vehicula ut a nisi. Fusce vel dui lacus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae.
          </p>
          <h3>{content}</h3>
          <a href='#l' className='btn btn-primary'>
            Do Something
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
