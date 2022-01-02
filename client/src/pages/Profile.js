import { withContext } from '../contexts/AppContext'

const Profile = props => {
  // const { currentUser } = props
  console.log('in profile user', props, props.user.reviews)

  return (
    <div>
      Hi {props.user.firstName.slice(0, 1).toUpperCase() + props.user.firstName.slice(1).toLowerCase()}!
      <br />
      Here are your reviews.
    </div>
  )
}

export default withContext(Profile)
