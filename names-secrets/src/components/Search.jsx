import React, { useState, useEffect } from 'react'
import { getNames } from '../services/apiConfig'
import NamesList from './NamesList'
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
    setSearchInput(e.target.value)
    setSearchResults(names.filter(n => n.fields.name.includes(e.target.value)))
  }

  return (
    <div className="compDiv">
      <input className='input' type="text" value={searchInput}
        placeholder='Search by name, just type'
      onChange={(e)=>search(e)} />
      <br />
      <br />
      <ul className="list">
        {searchResults.map(result => {
          return (
            <li  key={result.id} className='nameList'>
              <Link  className='linkNamesList' to={`/names/${result.id}`}>{ result.fields.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )


}
