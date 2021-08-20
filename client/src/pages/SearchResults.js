import React, { useState } from 'react'

import ContentHeader from '../components/ContentHeader'

const SearchResults = () => {
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <ContentHeader title='Search' />
        <div className='card w-50 mx-auto'>
          <div className='card-header'>
            <h5 className='m-0' style={{ color: 'white ' }}>
              Search
            </h5>
          </div>
          <div className='card-body' style={{ height: 200 }}>
            <div className='form-group'>
              <h6 className='m-0'>results</h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchResults
