import React from 'react'

import ContentHeader from '../components/ContentHeader'

const Businesses = (props) => {
  console.log(props.name, typeof props.name)
  // if (!props.length) {
  //   return null
  // }
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <ContentHeader title='Businesses Page' />
        <div className='card w-50 mx-auto'>
          <div className='card-header'>
            <h5 className='m-0'>Businesses</h5>
          </div>
          <div className='card-body'>
            <h6 className='card-title'>
              props.name supposed to show up here{console.log(props.name)}{' '}
              {props.name}
            </h6>

            <p className='card-text'>
              Sed lobortis magna quis lectus vulputate ornare. Nunc est velit,
              pharetra sit amet ex in, molestie egestas ex. In ac urna vel purus
              accumsan vehicula ut a nisi. Fusce vel dui lacus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
            <a href='#l' className='btn btn-primary'>
              Do Something
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Businesses
