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
        // console.log('response', fetchReviews, responseData)
        alert('bus deats useeffect successful')
        console.log('responseData', responseData)
        setFetchReviews(responseData)
        //gets rid of memory leak error
        return function clean() {}
      } catch (error) {
        return error
      }
    }
    getBusiness()
  }, [])

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>comment</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        {fetchReviews &&
          fetchReviews.business.reviews.map(review => {
            return (
              <tr key={review._id}>
                <td>{review.comment}</td>
                <td>{review.rating}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default BusinessReviews
