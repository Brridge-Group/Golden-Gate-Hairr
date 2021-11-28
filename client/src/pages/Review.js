import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import { useHistory } from 'react-router-dom'

const Review = () => {
  const history = useHistory();
  const business = history.location.state.business;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    comment: ''
  })

  console.log(business)
  const { comment } = reviewForm

  const submitReview = () => {

  }

  const routeChange = () => {
    history.push('/')
  }

  const handleChange = e => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value })
  }

  return (
    <React.Fragment>
      <ContentHeader title='Search' />
      <div className='card w-50 mx-auto'>
      <div className='card-body review' >
    {/* <div className='review-container'> */}
            <h6 className='m-0'>Review your experience with {business.businessName} </h6>
            <form className='form' onSubmit={submitReview}>
    <div className="form-group star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "btn-review on" : "btn-review off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
            </div>
            <div className='form-group'>
              <label htmlFor='comment'></label>
              <textarea
                name='comment'
                type='text'
                className='form-control'
                onChange={handleChange}
                value={comment}
              />
            </div>
            <button
                onChange={handleChange}
                type='submit'
              className='btn btn-primary'
              onClick={routeChange}
            >

                Submit
              </button>

            </form>
      </div>
      </div>
      {/* </div> */}
      </React.Fragment>
  );
}

export default Review
