import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { withContext } from '../contexts/AppContext'
import { Link } from 'react-router-dom'

const UpdateReview = props => {
  const reviewId = useParams().id
  const history = useHistory()
  // const business = history.location.state.business
  console.log('update review, props, props.user', props, props.user)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [updateUserReview, setUpdatUserReview] = useState([])
  // const [updateUserReview, setUpdatUserReview] = useState(props.user)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`/api/reviews/${reviewId}`, { method: 'GET' })
        const responseData = await response.json()

        if (!response.ok) {
          throw new Error(responseData.message)
        }
        console.log('in fetchreview use effect responseData', responseData)
        setComment(responseData.review.comment)
        setRating(responseData.review.rating)
        setBusinessName(responseData.review.businessName)
      } catch (err) {
        console.log(err)
      }
    }

    fetchReview()
  }, [])

  const updateReview = async e => {
    e.preventDefault()
    let updatedReview = {
      comment: comment,
      user: props.user._id,
      // business: business._id,
      rating: rating,
    }

    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...updatedReview }),
      })

      if (!response.ok) {
        throw new Error('Could not update review')
      }
      updateUser()

      history.push('/profile')
    } catch (err) {}
  }

  const updateUser = async () => {
    const userId = props.user._id
    try {
      const response = await fetch(`/api/users/${userId}`, { method: 'GET' })
      const responseData = await response.json()

      console.log('in updateuser', responseData)
      if (!response.ok) {
        throw new Error(responseData.message)
      }
      setUpdatUserReview(responseData)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log('updateUserReview', updateUserReview)

  return (
    <>
      <div className='card w-50 mx-auto'>
        <div className='card-body review'>
          <h6 className='m-0'>Update your experience with {businessName} </h6>
          <form className='form' onSubmit={updateReview}>
            <div className='form-group star-rating'>
              {[...Array(5)].map((star, index) => {
                index += 1
                return (
                  <button
                    type='button'
                    key={index}
                    className={index <= (hover || rating) ? 'btn-review on' : 'btn-review off'}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className='star'>&#9733;</span>
                  </button>
                )
              })}
            </div>
            <div className='form-group'>
              <label htmlFor='comment'></label>
              <textarea name='comment' type='text' className='form-control text-area' onChange={e => setComment(e.target.value)} value={comment} />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            <Link to='/reviews' className='btn btn-secondary'>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default withContext(UpdateReview)
