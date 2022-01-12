import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom'

const ReviewUser = props => {
  console.log('in reviewuser, props, props.user', props, props.user.reviews[1].comment)
  const [userReviews, setUserReviews] = useState([])

  const userReviewArr = []

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await fetch(`/api/reviews`)
        const responseData = await response.json()

        // Review.find({ _id: props.user.reviews })
        console.log('in use effect', response)

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
  }, [props.user.reviews])
  const deleteUserReview = async id => {
    console.log('id', id)
    try {
      const response = await fetch(`/api/reviews/${id}`, { method: 'DELETE' })
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message)
      }
      console.log(responseData)

      setUserReviews(
        userReviews.filter(review => {
          return review.id !== id
        })
      )
    } catch (err) {
      console.log(err)
    }
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
                <button type='button' className='btn btn-default' onClick={() => deleteUserReview(userRev.id)}>
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

export default withContext(ReviewUser)
