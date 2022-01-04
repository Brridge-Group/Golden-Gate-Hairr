import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom'

const Profile = props => {
  console.log(props)
  const [userReviews, setUserReviews] = useState([])
  const [loadedReviews, setLoadedReviews] = useState([])

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
  }, [])
  // }, [props.user.reviews])

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
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='card w-50 mx-auto'>
      <div className='card-body'>
        Hi {props.user.firstName.slice(0, 1).toUpperCase() + props.user.firstName.slice(1).toLowerCase()}!
        <br />
        Here are your reviews.
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>comment</th>
              <th>rating</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map(userRev => {
              return (
                <tr key={userRev.id}>
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
      </div>
    </div>
  )
}

export default withContext(Profile)
