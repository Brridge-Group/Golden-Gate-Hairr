import { useEffect } from 'react'

import { withContext } from '../contexts/AppContext'
import UserReviews from '../components/UserReviews'
import { useHistory } from 'react-router-dom'

const Profile = props => {
  const history = useHistory()

  console.log('in profile', props.user, history)
  useEffect(() => {
    const getUser = () => {
      // console.log('in profile useeffect')
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
        <UserReviews user={props.user} />
      </div>
    </div>
  )
}

export default withContext(Profile)
