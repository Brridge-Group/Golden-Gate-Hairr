import { withContext } from '../contexts/AppContext'
import ReviewUser from '../components/ReviewUser'

const Profile = props => {
  return (
    <div className='card w-50 mx-auto'>
      <div className='card-body ' style={{ width: 'fit-content' }}>
        Hi {props.user.firstName.slice(0, 1).toUpperCase() + props.user.firstName.slice(1).toLowerCase()}!
        <br />
        Here are your reviews.
        <ReviewUser />
      </div>
    </div>
  )
}

export default withContext(Profile)
