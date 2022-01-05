import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const ListReviews = props => {
  console.log('in profile, props', props)
  const [userReviews, setUserReviews] = useState([])
  const [loadedReviews, setLoadedReviews] = useState([])
  const [updateUser, setupdateUser] = useState(this.props.user)

  const history = useHistory()

  const userReviewArr = []

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await fetch(`/api/reviews`)
        const responseData = await response.json()

        if (!response.ok) {
          throw new Error(responseData.message)
        }
        const reviews = responseData.reviews
        reviews.map(review => {
          props.user.reviews.find(userReview => {
            if (userReview === review.id) {
              userReviewArr.push(review)
            }
          })
        })
      } catch (error) {
        console.log(error)
      }
      setUserReviews(userReviewArr)
    }

    fetchUserReviews()
    history.push('/profile')
  }, [])

  // console.log('userReviewBusArr, businessReviews, userReviews', userReviewBusArr, businessReviews, userReviews)

  const deleteUserReview = async id => {
    console.log('id', id)
    try {
      const response = await fetch(`/api/reviews/${id}`, { method: 'DELETE' })
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message)
      }
      console.log(responseData)

      setLoadedReviews(
        loadedReviews.filter(review => {
          return review.id !== id
        })
      )
      const user = Object.assign({}, this.props.user)
      user.push(loadedReviews)
      setupdateUser(user)
      console.log('updateUser', updateUser)
    } catch (err) {
      console.log(err)
    }
    history.push('/profile')
  }

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>business</th>
          <th>comment</th>
          <th>rating</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {userReviews.map(userRev => {
          // console.log('userRev', userRev)
          return (
            <tr key={userRev.id}>
              <td>{userRev.businessName}</td>
              <td>{userRev.comment}</td>
              <td>{userRev.rating}</td>
              <td>
                <Link to={'/reviews/' + userRev.id} className='btn btn-default'>
                  Edit
                </Link>
              </td>
              <td>
                <button type='button' className='btn btn-default' onClick={() => deleteUserReview(userRev)}>
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default withContext(ListReviews)
