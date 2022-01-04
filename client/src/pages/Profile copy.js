import { useState, useEffect } from 'react'
import { withContext } from '../contexts/AppContext'
import axios from 'axios'

const Profile = props => {
  // const { currentUser } = props

  const [userReviews, setUserReviews] = useState([])

  // const getUserReviews = () => {
  //   props.user.reviews.map(review => console.log(review))
  // }

  // const getReviews

  // const getUserReviews = () => {
  //   props.user.reviews.map(review => Reviews.find(_id: review))
  // }

  // const fetchUserReviews = async () => {
  //   try {
  //     const response = await fetch(`/api/reviews/${props.user.reviews}`, { method: 'GET' })
  //     const responseData = await response.json()

  //     if (!response.ok) {
  //       throw new Error(responseData.message)
  //     }

  //     setUserReviews(responseData.items)
  //     console.log('fetched reviews', userReviews)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect = () => {
  //   fetchUserReviews()
  // }
  // const fetchUserReviews = () => {
  //   axios
  //     .get('api')
  //     .then(response => {
  //       const data = response.data
  //       setUserReviews(data)
  //       console.log('data has been received')
  //     })
  //     .catch(() => {
  //       alert('error retrieving data')
  //     })
  // }

  // useEffect(() => {
  //   const fetchUserReviews = () => {
  //     axios
  //       .get('api/reviews')
  //       .then(response => {
  //         const data = response.data
  //         setUserReviews(data)
  //         console.log('data has been received')
  //       })
  //       .catch(() => {
  //         alert('error retrieving data')
  //       })
  //   }

  //   fetchUserReviews()
  // }, [])
  // }

  //     fetchUserReviews()
  //   }, [])
  // }
  // Contact.find({ _id: THE_CONTACT_ID })

  // Reviews.find({_id:})
  // const getUserReviews = () => {
  // useEffect(() => {
  //   const fetchUserReviews = async () => {
  //     try {
  //       const response = await fetch(`/api/users/${props.user.reviews}`, { method: 'GET' })
  //       const responseData = await response.json()

  //       if (!response.ok) {
  //         throw new Error(responseData.message)
  //       }

  //       setUserReviews(responseData)
  //       console.log('fetched reviews', userReviews)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   fetchUserReviews()
  // }, [])
  // }

  return (
    <div className='card w-50 mx-auto'>
      <div className='card-body'>
        Hi {props.user.firstName.slice(0, 1).toUpperCase() + props.user.firstName.slice(1).toLowerCase()}!
        <br />
        Here are your reviews.
        {props.user.reviews.map(review => {
          return <h6>{review.comment}</h6>
        })}
        {/* <button onClick={fetchUserReviews} className='btn btn-default'></button> */}
      </div>
    </div>
  )
}

export default withContext(Profile)
