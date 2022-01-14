import React, { useState, useEffect } from 'react'
import { getNames } from '../services/apiConfig'
import { Link } from 'react-router-dom'

export default function Search() {
  const [names, setNames] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchNames = async () => {
      setNames(await getNames())
    }
    fetchNames()
  }, [])

  const search = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
    setSearchResults(names.filter(n => n.fields.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    
    <div className="compDiv">
      <h1>Search name</h1>
      <input className='input' id="search" type="text" value={searchInput} placeholder='Type name' onChange={(e)=>search(e)} />
      <br />
      {searchInput ? <ul className="list">
        {searchResults.map(result => {
          return (
            <li  key={result.id} className='nameList'>
              <Link  className='linkNamesList' to={`/names/${result.id}`}>{ result.fields.name}</Link>
            </li>
          )
        })}
      </ul> : <h4></h4> }
    </div>
  )
}
