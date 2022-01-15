import { useEffect } from 'react'

import { withContext } from '../contexts/AppContext'
import UserReviews from '../components/UserReviews'

const Profile = props => {
  console.log(props.user, 'in profile')
  useEffect(() => {
    const getUser = () => {
      console.log('in profile useeffect')
      const id = props.user._id
      fetch(`api/users/${id}`)
    }
    console.log('props.user in profile', props.user)
    getUser()
  }, [props.user])
  return (
    <div className='card w-50 mx-auto'>
      <div className='card-body ' style={{ width: 'fit-content' }}>
        Hi {props.user.firstName.slice(0, 1).toUpperCase() + props.user.firstName.slice(1).toLowerCase()}!
        <br />
        Here are your reviews.
        <UserReviews />
      </div>
    </div>
  )
}

export default withContext(Profile)
