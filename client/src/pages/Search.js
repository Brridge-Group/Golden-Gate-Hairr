import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory()
  // const cityLowerCase =

  const handleSearch = e => {
    let value = e.target.value
    const inputCase = value.slice(0).toLowerCase()
    setSearchTerm(inputCase)
  }

  const buttonOnClick = () => {
    console.log('button', searchTerm)
    history.push(`/search/${searchTerm}`)
  }

  return (
    <>
      <div className='card w-50 mx-auto'>
        <div className='card-body' style={{ height: 200 }}>
          <div style={{ textAlign: 'center' }} className='search form-group'>
            <label htmlFor='search'>
              <h6 className='m-0'>I'm looking for a hair stylist in </h6>
            </label>
            <input
              type='text'
              onChange={e => handleSearch(e)}
              placeholder='city'
              style={{ marginLeft: 10, marginRight: 10 }}
            />

            <button
              style={{ border: 'none', background: 'none' }}
              onClick={buttonOnClick}
            >
              <i className='fas fa-search'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
