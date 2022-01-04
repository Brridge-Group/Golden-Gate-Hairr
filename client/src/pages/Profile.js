import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import axios from 'axios'

const Profile = props => {
  const [userReviews, setUserReviews] = useState([])
  const userReviewArr = []

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
    } catch (err) {
      console.log(err)
    }
    setUserReviews(userReviewArr)
  }

  return (
    <div className='card w-50 mx-auto'>
      <div className='card-body'>
        Hi {props.user.firstName.slice(0, 1).toUpperCase() + props.user.firstName.slice(1).toLowerCase()}!
        <br />
        Here are your reviews.
        {console.log('userReviews in return', userReviews)}
        {userReviews.map((userRev, index) => {
          return (
            <ul>
              <li key={index}>
                {userRev.comment}
                {userRev.rating}
              </li>
            </ul>
          )
        })}
        <button onClick={fetchUserReviews} className='btn btn-default'></button>
      </div>
    </div>
  )
}

export default withContext(Profile)
