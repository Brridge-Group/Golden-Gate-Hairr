import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import axios from 'axios'

const Profile = props => {
  const [userReviews, setUserReviews] = useState([])

  const fetchUserReviews = async () => {
    try {
      const response = await fetch(`/api/reviews/`, { method: 'GET' })
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message)
      }
      const userReviewArr = []
      console.log('fetched responseData.reviews', responseData.reviews)
      const reviews = responseData.reviews
      reviews.map(review => {
        props.user.reviews.find(userReview => {
          if (userReview === review.id) {
            userReviewArr.push(review)
          }
        })
        console.log(userReviewArr)
        return setUserReviews(userReviewArr)
      })
    } catch (err) {
      console.log(err)
    }
    console.log(userReviews)
  }
  console.log(userReviews)

  return (
    <div className='card w-50 mx-auto'>
      <div className='card-body'>
        Hi {props.user.firstName.slice(0, 1).toUpperCase() + props.user.firstName.slice(1).toLowerCase()}!
        <br />
        Here are your reviews.
        {props.user.reviews}
        {userReviews.map(review, index => {
          return (
            <ul>
              <li key={index}>
                {review.comment}
                {review.rating}
              </li>
            </ul>
          )
        })}
        {/* {props.user.reviews.map(review => {
          return { review }
        })} */}
        <button onClick={fetchUserReviews} className='btn btn-default'></button>
      </div>
    </div>
  )
}

export default withContext(Profile)
