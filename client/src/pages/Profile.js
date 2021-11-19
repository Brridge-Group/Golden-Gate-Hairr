import React from 'react'
import { withContext } from '../contexts/AppContext'

const Profile = (props) => {
  // const { currentUser } = props
  console.log('in profile user', props, props.user)

  return <div>hi {props.user.firstName}!</div>
}

export default withContext(Profile)
