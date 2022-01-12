import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import { useHistory } from 'react-router-dom'

const Review = props => {
  const history = useHistory()
  const business = history.location.state.business
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [userReviews, setUserReviews] = useState(props.user.reviews)
  const [comment, setComment] = useState('')

  // TODO (Backlog): Error Handling UI
  const [_error, set_Error] = useState(null)

  console.log('in review props.user._id', props.user._id)

  // useEffect(() => {
  //   const id = props.user._id
  //   fetch(`api/users/${id}`)
  // }, [userReviews])

  const saveNewReview = async () => {
    let newReview = {
      comment: comment,
      user: props.user._id,
      business: business._id,
      rating: rating,
      businessName: business.businessName,
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newReview }),
    }

    try {
      // console.log('in try, new review, request options', newReview, requestOptions)
      const response = await fetch('/api/reviews', requestOptions)
      if (!response.ok) {
        throw new Error('New review not saved! Please resubmit.')
      }
      const json = await response.json()
      alert('Review successful.')
    } catch (error) {
      console.error('Review not created.', error.message)
      set_Error(error.message)
    }
    // setReviewForm(prevReviewForm => [...prevReviewForm, newReview])
  }

  const submitReview = e => {
    e.preventDefault()

    // const itemToAdd = { name: item, date: Date.now() };
    // const newReview = { comment: comment, user: props.user._id, business: business._id, rating: rating, businessName: business.businessName }
    // console.log('in submit review, reviewForm', business.businessName, rating, comment)

    saveNewReview().then(history.push('/'))
    // setUserReviews(prevUserReviews => [...prevUserReviews, newReview])
  }

  return (
    <>
      <div className='card w-50 mx-auto'>
        <div className='card-body review'>
          <h6 className='m-0'>Review your experience with {business.businessName} </h6>
          <form className='form' onSubmit={submitReview}>
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
              <textarea name='comment' type='text' className='form-control text-area' onChange={e => setComment(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default withContext(Review)
