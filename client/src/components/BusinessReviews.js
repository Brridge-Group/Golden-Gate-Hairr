import { useEffect, useState } from 'react'

const BusinessReviews = props => {
  const [fetchReviews, setFetchReviews] = useState('')

  useEffect(() => {
    const getBusiness = async () => {
      const id = props.business._id
      try {
        console.log('in try, get bus id', id)
        const response = await fetch(`/api/businesses/${id}`, { method: 'GET' })
        const responseData = await response.json()
        if (!response.ok) {
          throw new Error(response.message)
        }
        setFetchReviews(responseData)
        console.log('response', fetchReviews, responseData)
        alert('bus deats useeffect successful.')
      } catch (error) {
        return error
      }
    }
    getBusiness()
  }, [])
  console.log('in bus reviews, fetchReviews', fetchReviews)

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>comment</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        {/* {fetchReviews.business.reviews.map(review => {
          return (
            <tr key={review._id}>
              <td>{review.comment}</td>
              <td>{review.rating}</td>
            </tr>
          )
        })} */}
      </tbody>
    </table>
  )
}

export default BusinessReviews
