import React from 'react'
import { withContext } from '../contexts/AppContext'

const Profile = (props) => {
  console.log(props)
  return <div>in profile</div>
}

export default withContext(Profile)
