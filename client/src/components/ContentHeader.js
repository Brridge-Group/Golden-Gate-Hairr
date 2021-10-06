import React from 'react'

const ContentHeader = (props) => {
  return (
    <React.Fragment>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0' style={{ color: 'white' }}>
                {props.title}{' '}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContentHeader
