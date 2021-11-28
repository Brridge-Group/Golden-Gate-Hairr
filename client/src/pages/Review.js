import React, { useState } from 'react'
import ContentHeader from '../components/ContentHeader'
import { useLocation } from 'react-router-dom'



const Review = (props) => {
  console.log(props)
  // const { state } = useLocation()
  // const business = state.business
  // console.log('in review',business)
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <React.Fragment>
      <ContentHeader title='Search' />
      <div className='card w-50 mx-auto'>
      <div className='card-body' >
    <div className='review-container'>
            <h6 className='m-0'>`Review your experience with ${ }` </h6>
    <div className="star-rating">
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
      </div>
      </div>
      </div>
      </React.Fragment>
  );
}

export default Review
