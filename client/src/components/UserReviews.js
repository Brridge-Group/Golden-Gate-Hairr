import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom'

const UserReviews = props => {
  useEffect(() => {
    console.log('in review user useeffect, props.user._id', props.user)
    const id = props.user._id
    fetch(`api/users/${id}`)
    console.log('props.user', props.user)
  }, [])
  console.log('in reviewuser, props, props.user', props, props.user)

  const userReviews = props.user.reviews
  console.log('review user', userReviews)

  const deleteUserReview = async id => {
    console.log('id', id)
    try {
      const response = await fetch(`/api/reviews/${id}`, { method: 'DELETE' })
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message)
      }
      console.log(responseData)

      // setUserReviews(
      //   userReviews.filter(review => {
      //     return review.id !== id
      //   })
      // )
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
        </tr>
      </thead>
      <tbody>
        {userReviews.map(review => {
          return (
            <tr key={review._id}>
              <td>{review.businessName}</td>
              <td>{review.comment}</td>
              <td>{review.rating}</td>
              <td>
                <Link to={'/reviews/' + review._id} className='btn btn-default'>
                  Edit
                </Link>
              </td>
              <td>
                <button type='button' className='btn btn-default' onClick={() => deleteUserReview(review._id)}>
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

export default withContext(UserReviews)
