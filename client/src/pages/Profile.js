import React from 'react'
// import { withContext } from '../contexts/AppContext'

const Profile = (props) => {
  // const { currentUser } = props
  console.log('in profile currentuser', props.currentUser)

  return <div>hi {props.currentUser.firstName}!</div>
}

export default Profile
