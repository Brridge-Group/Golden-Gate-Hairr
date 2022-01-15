import React from 'react'

const BusinessReviews = props => {
  // useEffect(() => {
  //   console.log('in review user useeffect, props.user._id', props.user._id)
  //   const id = props.user._id
  //   fetch(`api/users/${id}`)
  //   console.log('props.user', props.user)
  // }, [])
  console.log('in bus reviews, props', props)

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>comment</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        {/* {userReviews.map(review => {
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
        })} */}
      </tbody>
    </table>
  )
}

export default BusinessReviews
