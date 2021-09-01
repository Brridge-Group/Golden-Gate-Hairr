import { useEffect, useState } from 'react'

// Style Imports
import './businessDetails.css'

// Custom Imports
import ContentHeader from '../../components/ContentHeader'

const BusinessDetails = () => {
  const [fetchedBusinessUsers, setFetchedBusinessUsers] = useState([])
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/api/businesses', { method: 'GET' })
        const responseData = await response.json()
        console.log(responseData)

        if (!response.ok) {
          throw new Error(response.message)
        }
        // setFetchedBusinessUsers(responseData.businesses)
      } catch (error) {
        return error
      }
    }

    fetchBusinesses()
  }, [])

  return (
    <>
      <section className='content-wrapper bus-details'>
        <header className='bus-details--header'>
          <ContentHeader title='Business Details Page' />
        </header>
        <div className='bus-details--container'>
          <figure className='bus-details--image'>
            <img
              src='https://via.placeholder.com/100'
              alt='Placeholder Business Profile Image'
            />
            <p className='bus-details--rating'>
              <img src='star.svg' alt='Star Icon' />
              <img src='star.svg' alt='Star Icon' />
              <img src='star.svg' alt='Star Icon' />
              <img src='star.svg' alt='Star Icon' />
            </p>
            <button className='bus-details--button'>Review</button>
          </figure>
          <div className='bus-details--info'>
            <h2 className='bus-details--name'>Business Name</h2>
            <div className='bus-details--address'>
              <p>12 Main Street Toronto, ON L3K 5H7</p>
              {/* <p>12 Main Street</p>
              <p>Toronto, ON</p>
              <p>L3K 5H7</p> */}
            </div>
            <div className='bus-details--description'>
              <p>The business description goes here.</p>
            </div>
          </div>
        </div>
        <button className='bus-details--button'>Book Now</button>
      </section>
    </>
  )
}

export default BusinessDetails
