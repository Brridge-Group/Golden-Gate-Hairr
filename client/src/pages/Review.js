import { useState } from 'react'
import { withContext } from '../contexts/AppContext'
import { useHistory } from 'react-router-dom'

const Review = props => {
  const history = useHistory()
  const business = history.location.state.business
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewForm, setReviewForm] = useState({
    comment: '',
  })

  // TODO (Backlog): Error Handling UI
  const [_error, set_Error] = useState(null)

  console.log('in review', business)
  const { comment } = reviewForm

  const handleChange = e => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value })
  }
  const saveNewReview = async () => {
    let newReview = {
      ...reviewForm,
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
      console.log('in try, new review', newReview)
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
    setReviewForm(prevReviewForm => [...prevReviewForm, newReview])
  }

  const submitReview = e => {
    e.preventDefault()
    // setReviewForm(prevReviewForm => [...prevReviewForm, newReview])
    // setItemList(prevItemList => [...prevItemList, docRef])

    saveNewReview().then(history.push('/'))
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
              <textarea name='comment' type='text' className='form-control text-area' onChange={handleChange} value={comment} />
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
