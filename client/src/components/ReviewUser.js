import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom'

const ReviewUser = props => {
  console.log('in reviewuser, props, props.user', props, props.user)
  const [userReviews, setUserReviews] = useState(props.user.reviews)

  const userReviewArr = []

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
        {props.user.reviews.map(review => {
          console.log('review.comment', review.comment)
          return (
            <tr key={review.id}>
              <td>{review.businessName}</td>
              <td>{review.comment}</td>
              <td>{review.rating}</td>
              <td>
                <Link to={'/reviews/' + review.id} className='btn btn-default'>
                  Edit
                </Link>
              </td>
              <td>
                <button type='button' className='btn btn-default' onClick={() => deleteUserReview(review.id)}>
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
